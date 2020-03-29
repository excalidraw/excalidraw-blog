---
title: Building Excalidraw's P2P Collaboration Feature
date: 2020-03-29
---

[Excalidraw](https://excalidraw.com/) is a whiteboard tool that lets you easily sketch diagrams that have a hand-drawn feel to them. As tech companies started to institute mandatory work from home policies due to the [COVID-19 pandemic](https://en.wikipedia.org/wiki/2019%E2%80%9320_coronavirus_pandemic), we realized that Excalidraw could be the perfect substitute for the whiteboard that is usually required for systems design interviews.

The problem was that Excalidraw was built to be a fundamentally single-player experience. However, we ([@idlewinn](https://twitter.com/edwinlin1987) and [@floydophone](https://twitter.com/floydophone)) were able to quickly add basic multiplayer support over a long weekend, and are continuing to make improvements to it every day.

## The requirements

- We wanted to be able to use this in our day jobs. In order to do that, it had to support [end-to-end encryption](/end-to-end-encryption/).
- We did not want to store anything server-side. Therefore, we opted for a pseudo-P2P model, where a central server relays end-to-end encrypted messages to all the peers in the room, but does no centralized coordination.

## Excalidraw's single-player architecture

Originally, Excalidraw kept an array of all the different drawn shapes -- called `ExcalidrawElement`s -- in Z-index order. The `ExcalidrawElement` interface looked something like this:

```typescript
interface ExcalidrawElement {
  id: string;
  type: "square" | "circle" | "arrow";
  width: number;
  height: number;
  // ... other fields describing the shape ...
  canvas: HTMLCanvasElement;
  isSelected: boolean;
}
```

This architecture was very easy to use client-side, but as we'll see, presented some challenges as we moved to multiplayer.

## Moving to multiplayer

We actually had two parallel multiplayer implementations. One was built on top of [Firebase](https://firebase.com/), the other on top of [Socket.io](https://socket.io/). We ended up going with Socket.io, but both implementations developed the same set of bugs, and the mitigations we applied in one branch were easily ported to the other.

Conceptually, we want to share the array of `ExcalidrawElement`s amongst multiple players. The first step was to refactor `ExcalidrawElement` to remove any state specific to a single player. This meant pulling out `canvas` and `isSelected` properties and storing them in a different data structure, as an `HTMLCanvasElement` can't be shared over the network, and every player will have a different selection state. Once we had these properties moved out, we started sharing the `ExcalidrawElement` array between peers.

## Socket.IO

When we started investigating multiplayer, we knew that WebSockets would be an important part of the this project because they enable rapid message based communication between clients without polling the server - in order to provide a smooth user experience we would need to sync very frequently. Socket.IO was a great candidate for this project because it's a popular open source library with a lot of support, it has many features relevant to our use case right out of the box, and it has some level of support even for browsers that don't have support for the [WebSocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API).

Some features of Socket.IO that are particularly beneficial to multiplayer:

- **Auto-reconnection:** if you get disconnected for any reason, you don't need to reload the page to see updates.
- **Binary Support:** our encrypted messages can be passed between the client and the server back to other clients as `ArrayBuffer`, so we don't need to convert them to other data structures at any point in the transit.
- **Room Support:** we want to limit updates only to the clients that care about them, and having a separate room per collaborative session was a straightforward way to implement that.

## Dealing with conflicts: adding new elements

Once we started sharing state between peers, we immediately ran into issues. The first was when elements were added.

In single-player Excalidraw, we would just append the element to the end of the array. In multiplayer Excalidraw, there was a race condition. If _peer A_ is adding a new element while _peer B_ is changing the color of an existing element, _peer C_ will either lose _peer A_'s new element or _peer B_'s edits. Even worse, if _peer A_ receives _peer B_'s updates while they are editing, the editor would delete the element from right under their mouse! This was clearly a bad user experience and we had to fix it before sharing this with anyone.

https://excalidraw.com/#json=5068269564198912,PmL8fegqNyHb0fKxoG6YAA

To fix this, we adopted an architecture of _merging states_ when we receive them. When _peer A_ receives an update from _peer B_, it looks at all the `ExcalidrawElement.id`s it has locally, and all of the incoming `ExcalidrawElement.id`s, and creates a new `ExcalidrawElement` array containing the union of both the local and incoming set.

## Dealing with conflicts: deleting elements

There's a big problem with the model above. If we're always keeping the union of all of the elements, there will be no way to delete any shapes from the canvas, as other peers would immediately resync the deleted shape and it would be merged back into the array.

To solve this problem, we used a method called [tombstoning](<https://en.wikipedia.org/wiki/Tombstone_(programming)>). We added a new field to the `ExcalidrawElement` interface called `isDeleted`. Peers would set this field to `true` to delete an element, and would filter the deleted elements out of the array at runtime.

https://excalidraw.com/#json=5148123005452288,FnrZbAe4qkHQCSd2BSkUIQ

The problem with tombstoning is that the size of your list grows forever, as nothing is every removed from the array. We don't consider this a problem as a shared whiteboard session will only contain a few dozen shapes, but we do remove any element with `isDeleted` set to true when saving to persistent storage, so long-lived drawings where this may become a problem are cleaned up.

## Dealing with conflicts: merging concurrent edits

There is still a problem with the model. Concurrent edits will still be lost, as our merge algorithm only looks at new elements being added or removed, and not changes to existing elements themselves.

To fix this, we introduced a new field to `ExcalidrawElement`: a **version number**. Whenever a peer edits an element -- changing its color, deleting it, resizing it, etc -- it increments the version number of that element before sending the state to its peers. Then, when we merge multiple peers state together, we throw out old versions of each element and just keep the latest ones.

https://excalidraw.com/#json=5147452789227520,QaCOJixahz7VLHs3eG1s7g

This algorithm is simple but effective, and solved most of our collaboration problems.

## Dealing with conflicts: breaking ties

The version number only solves race conditions when players are editing different elements concurrently. What if they're editing the same element concurrently?

For Excalidraw, we don't really care! We think this will be a pretty rare situation, and that users will tolerate some jankiness if it happens.

With that said, it is important that all peers converge on the same state. Otherwise, they will see different versions of the drawing and it will be very confusing!

In order to do this, we made one final change. We added a new field called `versionNonce` to the `ExcalidrawElement`. Any time we increment the `version` of an element, we set `versionNonce` to a random integer. At merge time, if we encounter two elements with the same version number but different data (i.e. two players editing the same element at the same time), we break the tie by favoring the one with the lower `versionNonce`. This ensures that one player will deterministically "win" on every peer.

## Future work

One problem we haven't solved yet is implementing multiplayer undo/redo. Our hack around this was to clear the undo/redo stack whenever you receive an update from a new peer. While this is a subpar user experience, it does solve a common case of one person doing the majority of the whiteboarding, and quickly undoing their most recent action.

Maybe you can help us solve this problem! Go to [our GitHub](https://github.com/excalidraw/excalidraw), fork the repo, and contribute!

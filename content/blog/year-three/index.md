---
title: Year three of Excalidraw
date: 2023-01-03
author: Excalidraw Team
link: https://github.com/orgs/excalidraw/people
image: og.png
---

It's been a great year for Excalidraw, and we're excited to share what we've been up to!

<!-- end -->

Greetings Excalidraw Fans!

First of all, thank you all for the continued support and for being a part of our growing user base. We are constantly amazed by the enthusiasm of our community, and it’s definitely helping us propel Excalidraw further, so don’t stop sharing your love!

With your help, just before the end of the year we’ve crossed [38K stars on GitHub](https://github.com/excalidraw/excalidraw), and are constantly trending everywhere, such as on [bestofjs.org](https://bestofjs.org/projects?sort=daily) project repository — this helps the open-source part of Excalidraw get in front of more developers like you!

It's been a big year. We've been so busy building your favorite whiteboarding tool that we haven't had the time to look back on all we've done... until now! Join us as we look back on how Excalidraw has grown in 2022 and get sneak a peek at what's to come!

(Psst, if you don't get to the end of the post, and you're looking for work, we're hiring! 🚀)

# What we’ve shipped in the editor

One of the biggest changes we've been proud to unveil last year was undoubtedly the editor redesign. While having scores of people contribute to the editor is awesome (much love!), if not careful, over the years you can end up with a design without a strong single thread going through!

This is where [Tony Bures](https://twitter.com/mrkvi) came in with a new design, and enlisting the help of [Barnabás Molnár](https://twitter.com/_barnabasmolnar) we were able to ship the new interface that still keeps out of your way, is even a bit more compact, a little more consistent, and even makes room for new features we'll be shipping this year!

There are some rough edges we need to fix up, such as missing hover/active states here and there, and some components still need porting (looking at you, context menu!). And not to forget, mobile design — while it's sporting the new drip, it will need a bit more work to truly shine and make you effective on your small devices!

https://twitter.com/excalidraw/status/1587483527804854277

### What may have you missed in 2022?

If you're using Excalidraw regularly, you shouldn't have missed many new features. But some can be a bit hidden, so let's take a look at some of the prominent changes this year. (We've included nuggets of information you may like 👀).

---

Freedrawing is fun, but sometimes it can get annoying if drawing gets slow, or unwanted gestures start happening, especially when using a stylus.

Palm rejection is hard in general, but doubly so on the web, so instead of doing that, we decided to sidestep it for now, and [Zsolt Viczián](https://twitter.com/zsviczian) helped us ship pen mode instead. It's enabled when we first detect a pen (stylus), and we start preventing most touch events until you leave it. You can still pan the canvas with two fingers, but we've learned that your hand triggered zooming too often so we've disabled touch-zooming in pen mode, too.

In the future we'll want to investigate better palm rejection so that if nothing else, we can re-enable touch-zooming.

https://twitter.com/zsviczian/status/1488879818305384449

Other common problem on tablets was performance. Some pens were firing pointer events much more frequently than needed, causing a bottleneck in rendering. So we've throttled them to not exceed the framerate of your screen (commonly 60Hz), which had the desired effect.

https://twitter.com/excalidraw/status/1491044664731856900

While performance improved, it may technically result in slightly less line resolution — for most use cases it's perfectly fine, but for handwriting we may want to investigate other venues (on that note, we would need to modify the freedraw algorithm, and there's also the fact that most devices don't emit high-resolution pointer events in the first place).

We've also heavily improved the Apple Pencil Scribble getting in the way, often dropping draw gestures altogether. Even so, sometimes drawing on iPads still triggers character recognition, which it's unclear whether we can prevent — if you're facing these problems, you might consider disabling Scribble in your settings.

Mobile and tablet experience is an ongoing effort and there are many more improvements to be had! But, you’re already making art in Excalidraw, so that makes us happy! ❤️

https://twitter.com/Biernacki/status/1584990065729888256

Do you know we support hyperlinks in the editor? Added by [Aakansha Doshi](https://twitter.com/aakansha1216), it allows you to add clickable links to elements to adding additional information and resources. Especially useful for linking diagrams together (e.g. on Excalidraw Plus 😋).

Support for in-diagram linking coming this year!

https://twitter.com/aakansha1216/status/1489256535817854977

One missing feature was to add background to freedraw shapes, which was correct by [Arun](https://twitter.com/node_monk)!

https://twitter.com/excalidraw/status/1491456843742605313

Until we do a proper redesign of the color picker, a useful feature we've added last year is to pick from the custom colors you've been already using on your canvas:

https://twitter.com/aakansha1216/status/1498292311381655554

Now having a prominent position in the toolbar, previously you may have missed we've also added the Eraser tool, which allows you to remove multiple elements with way more ease, especially those tiny freedraw lines!

https://twitter.com/aakansha1216/status/1502296876405891074

[Tom Sherman](https://twitter.com/tomus_sherman) added element locking to the editor, allowing you to lock elements in place to prevent accidental modifications or deletions.

https://twitter.com/excalidraw/status/1512104367213658122

Libraries is something we'll be spending way more time on this year, but a big change led by [Ishtiaq](https://twitter.com/ishtiaq103) last year was moving libraries to a sidebar, allowing you to keep the libary open at all times:

https://twitter.com/excalidraw/status/1539269812253335553

And little known feature is the ability to add multiple libraries to your canvas at once:

https://twitter.com/excalidraw/status/1524423937542795265

You could add new points to existing arrow/lines in the line editor (<kbd>Ctrl/Cmd-Enter</kbd>) before, but it was hard to add points in the middle segments, so we've decided to work on that.

First, Aakansha added support for adding a midpoint to lines outside the line editor:

https://twitter.com/aakansha1216/status/1557748574712041473

And then also allowed adding midpoints to any segment from within the line editor. We've decided to not expose this outside the line editor for now because it tends to get in the way too often when you try to move lines around.

https://twitter.com/excalidraw/status/1570059398881636354

[…]

[Ryan](https://twitter.com/_ryan_di) and [David](https://twitter.com/dluzar) have improved the default radius sizing for rectangles, making rectangles rounding to look across sizes. While in the future we may support customizing radius to a point, our goal still is to make diagramming easy with as little tinkering with settings as possible.

https://twitter.com/excalidraw/status/1600883623980171265

Arrow labels https://twitter.com/excalidraw/status/1599792132725669888
Editor redesign https://twitter.com/excalidraw/status/1587483527804854277

https://twitter.com/excalidraw/status/1559205594782990345

TODO

# What's happening on the Plus side?

TODO

sort collections

https://twitter.com/excalidraw/status/1508847388517089292

autoredirecting

https://twitter.com/excalidrawPlus/status/1526973455475671040


https://twitter.com/excalidraw/status/1529106689600921600 design + search panel
https://twitter.com/excalidrawPlus/status/1540091685874634754 dashboard
https://twitter.com/excalidraw/status/1545109954616508416 yearly billing
https://twitter.com/excalidrawPlus/status/1549790547606388736 (sorting scenes)
https://twitter.com/excalidrawPlus/status/1552670831402225664 (comments)
https://twitter.com/excalidraw/status/1559936348508884994 (changing initial page behavior0
https://twitter.com/excalidraw/status/1571886450903220232 (quick drawing)
https://twitter.com/excalidraw/status/1564268627217481728 (collection emojis)


# VS Code extension

TODO

https://twitter.com/excalidraw/status/1511332566216884237

https://twitter.com/excalidraw/status/1534585011361423360

https://twitter.com/excalidraw/status/1562810764444200966

# Community

## Discord Restructuring

We restructured the Excalidraw Discord server to encourage engagement and interaction within our community! Here’s a quick outline of our channels...

TODO

## In the wild

TODO

Using for docs

https://twitter.com/willmcgugan/status/1584174595023609857


Books

https://twitter.com/Pragmatic_Eng/status/1575167020139970562


Conferences

https://twitter.com/excalidraw/status/1573305116333338626

https://twitter.com/aakansha1216/status/1555559465508040705

nice slides

https://twitter.com/FUSAKLA/status/1538248868885893120

https://twitter.com/salaboy/status/1526490157850951680

https://twitter.com/erikras/status/1522342340664303616

# What's coming up?

TODO

Excalidraw Team

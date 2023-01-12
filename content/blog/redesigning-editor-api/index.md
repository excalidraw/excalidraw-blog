---
title: Rethinking the component API
date: 2023-01-13
author: Excalidraw Team
link: https://github.com/orgs/excalidraw/people
# image: og3.jpg
---

<!-- end -->

Since we've shipped the editor redesign late last year, one burning questions many of you devs had was when is it going to be released to the Excalidraw package, and why has it not been released in the first place?

https://twitter.com/excalidraw/status/1587483527804854277

The reason we couldn't ship it on day one alongside the excalidraw.com release was customization. In the public app we've hardcoded some things, such as the main menu and the welcome screen — things you likely would not want hardcoded in your own apps — and we weren't quite sure how to design the API to make this easily customizable.

![Custom UI on excalidraw.com](./excalidraw-custom-ui.png)

Today, we're releasing our initial take of what the new API will look like, allowing you to customize the major parts of what was blocking the new release. If your feedback is positive, we will continue exposing more API in similar vein so you can tailor the editor experience to your and your user's needs.

Let's take a closer look at the changes, and how or why we've implemented them that way.

---

The two new major things we've introduced as part of the redesign is the top-left dropdown that serves as the main menu, and the welcome screen, including hints for new users to help them get the gist of the UI.

![Main components to customize](./main-components.png)

It was clear from that get go that you will want to customize these to your needs, and more importantly, remove the parts that would be non-functional in your own apps.

Up to this point we've been using a combination of config objects (e.g. `props.UIOptions`), and render functions (e.g. `props.renderFooter`). While these are fine and you can get most things done this way, we've set out in search of API that would be more flexible and composable, and also a bit more intuitive to use.

<!-- TODO -->

# Main idea and implementation

TODO: Discuss props, our use of React.Children, ...

# `<MainMenu/>`

TODO

# `<WelcomeScreen/>`

TODO

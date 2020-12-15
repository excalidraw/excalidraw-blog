---
title: Deprecating Excalidraw Electron
date: 2020-12-15
author: tomayac
link: https://twitter.com/tomayac
---

We have decided to deprecate [Excalidraw Desktop](https://github.com/excalidraw/excalidraw-desktop),
an [Electron](https://www.electronjs.org/) wrapper for Excalidraw, in favor of the Web version
that you can—and always could—find at [excalidraw.com](https://excalidraw.com/).
After a careful analysis, we have decided that [Progressive Web App](https://web.dev/pwa/) is the
future we want to build upon.
Read on to learn more about our rationale.

<!-- end -->

## How Excalidraw Desktop came into being

Soon after [@vjeux](https://twitter.com/vjeux) had created the initial version of Excalidraw in
January 2020 and [blogged about it](reflections-on-excalidraw/), he proposed the following in
[Issue #561](https://github.com/excalidraw/excalidraw/issues/561#issue-555138343):

> "Would be great to wrap excalidraw within electron (or equivalent) and publish it as a native
  application to the various app stores."

The immediate reaction by [@voluntadpear](https://github.com/voluntadpear) was to suggest:

> "What about making it a PWA instead? Android currently supports adding them to the Play Store as
  Trusted Web Activities and hopefully iOS will do the same soon.
> On Desktop, Chrome lets you download a desktop shortcut to a PWA."

The resolution @vjeux came to was simple:

> "We should do both :)"

While work on converting the back then version of Excalidraw into a PWA was started by
@voluntadpear and later others, [@lipis](https://github.com/lipis) independently
[went on](https://github.com/excalidraw/excalidraw/issues/561#issuecomment-579573783) and created
a [separate repo](https://github.com/excalidraw/excalidraw-desktop) for Excalidraw Desktop.

The initial goal set by @vjeux, *i.e.*, to submit Excalidraw to the various app stores
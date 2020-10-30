---
title: Open Colors
date: 2020-10-29
author: Lipis
link: https://twitter.com/lipis
---

The biggest attribute of Excalidraw it's the simplicity. So even though we have the option to insert any color (using the [HEX](https://www.google.com/search?q=%23c0ffee&hl=en) value) we have just the _right amount_ (15) of the default colors, in three different shades.

<!-- end -->

![Color pickers](color-pickers.png)

I remember it was my very first [pull request](https://github.com/excalidraw/excalidraw/pull/378) to Excalidraw to add the [Open Colors](https://yeun.github.io/open-color/) open source color scheme and it was accepted the same day! I was super excited to say the least, because I knew this color scheme for a while now, but never found a great project to actually use it. This was it.

They say a picture is worth a thousand words! I don't know what makes this color scheme so great, but what I know is that anything in Excalidraw is making it even better. (Click on the image below to open it in Excalidraw.)

https://excalidraw.com/#json=5120999011909632,Y57VloPaA1LSKT4-1NTgNA

Eventually we loved these colors so much, that we installed their [npm package](https://www.npmjs.com/package/open-color) and we are now using it everywhere. If you spot a color that is not an open color, sumbit a PR :)

Here is how we are actually using them in [colors.ts](https://github.com/excalidraw/excalidraw/blob/master/src/colors.ts) in our codebase.

Open Colors come with MIT License, which means you can use it anywhere you like without restrictions.

---

**P.S.** We owe a huge thanks to the [Open Colors](https://yeun.github.io/open-color/) creator, as we trully believe that part of Exaclidraw's success is these colors as well :)

---
title: Year two of Excalidraw
date: 2022-01-03
author: Excalidraw Team
link: https://github.com/orgs/excalidraw/people
image: og.png
---

Excalidraw celebrated its second birthday! What happened during the last year and what's next?

<!-- end -->

It's been another great year for [Excalidraw](https://excalidraw.com), the virtual whiteboard for sketching hand-drawn like diagrams. Let's review what happened since [the last time](https://blog.excalidraw.com/one-year-of-excalidraw/).

The importance of remote working and collaboration has not been diminished, and more and more people are reaching for tools such as Excalidraw. **We've seen the usage go from 60K monthly active to 170K monthly active users!**

![uploaded image](https://i.imgur.com/F4rK7ls.jpg)

But it's not just the times. We are hearing far and wide how much you love Excalidraw. Thank you!

# Excalidraw+

Probably the most commonly requested feature from people using Excalidraw was to be able to manage all their drawings and teams.

[Excalidraw Plus](https://plus.excalidraw.com) was released in May 2021 to address this. But another motive was to make Excalidraw sustainable and increase its funding.

https://twitter.com/excalidraw/status/1389253752742350858

We're succeeding on both fronts. Excalidraw+ has been adopted by many companies, big and small, as well as you lot 😉, and we are now able to invest back into the editor. In October, [Aakansha](https://twitter.com/aakansha1216), a long-time Excalidraw contributor, officially joined our ranks, and is currently devoting her time making the editor even better. ❤️

We will be releasing a roadmap for Excalidraw+ soon, but in the near future we will be finishing the much requested yearly billing, improve workflows, and reduce friction from the initial load of the app to switching between drawings. We will support sharing libraries between team members, and managing these libraries. And we will finally introduce versioning.

If you want to help build something great, don't hesitate to [reach us](mailto:careers@excalidraw.com), or simply start contributing to [Excalidraw](https://github.com/excalidraw/excalidraw).

# Excalidraw

As part of our review, let's celebrate and look back on some of the contributions of the past year.

### The editor

We're continuing to improve the core editor experience. While adding new features is part of this process, we're also working on enhancing existing features, fixing new bugs, and ensuring the UI stays simple to use.

Two of the most heavily requested features were added towards the end of the year.

[David](https://twitter.com/dluzar) introduced [image support](https://github.com/excalidraw/excalidraw/pull/4011), so you can embed images and svgs into your drawings.

https://twitter.com/excalidraw/status/1451280455647563783

Need to create sticky notes? [Aakansha](https://twitter.com/aakansha1216) added support for [binding text to a container](https://github.com/excalidraw/excalidraw/pull/4343). No more manual resizing, positioning, or adding line breaks so the text fits into your containers!

https://twitter.com/aakansha1216/status/1471509326674030592

The original freedraw tool was great, but as it was only an extension of the line tool, and it was often creating rough shapes with too many points, we thought it could use a boost. At the time, [Steve Ruiz](https://twitter.com/steveruizok) was finishing up his library [perfect-freedraw](https://github.com/steveruizok/perfect-freehand), so we asked him [to integrate](https://github.com/excalidraw/excalidraw/pull/3512) it to Excalidraw. 🙏

https://twitter.com/excalidraw/status/1391443782516740096

At the onset of the year, Aakansha has added [a view mode](https://github.com/excalidraw/excalidraw/pull/2840), useful in presentations or when you just want to view your drawings without editing them. It's complementing our existing zen mode, which we're continually improving as well.

https://twitter.com/excalidraw/status/1356350401944158211

[Riley Schnee](https://twitter.com/rileyschnee) [imlemented](https://github.com/excalidraw/excalidraw/pull/2520) for object flipping.

https://twitter.com/excalidraw/status/1375479950535458819

Creating new shapes should be easy and fun, but sometimes you need a bit more control. One example is the the line/arrow editor where you can modify or add new points (double-click on a line or select it and hit Enter). Recently, we've added support for [selecting multiple points at once](https://github.com/excalidraw/excalidraw/pull/4373), and more is yet to come.

https://twitter.com/dluzar/status/1470389942262054920

### Keeping things simple

This is an ongoing process, and while one of Excalidraw's principles is simplicity, there will always be ways in which can communicate features better, or improve the design.

We've added [toast messages](https://github.com/excalidraw/excalidraw/pull/2772) to notify of activity or interactions that aren't inherently visible, such as when using shortcuts to do things like exporting an image to your clipboard.

https://twitter.com/excalidraw/status/1350099747709841410

The export dialog [has been redesigned](https://github.com/excalidraw/excalidraw/pull/3613), but more work will be done to ensure you know what to click on, and which action does what.

Recently we've introduced a common brand color, made small [tweaks to the toolbar](https://github.com/excalidraw/excalidraw/pull/4387) as well as several button states to clarify which ones are selected. Accessibility is not the only objective, we also want the editor to look nice, and we will continue working on this going forward.

https://twitter.com/excalidraw/status/1471126947145072649

### Library improvements

While it's easy to make beautiful drawings in Excalidraw, often nothing beats a well crafted work that you can readily drop onto your canvas. Libraries are here to stay and we're working on making them even more awesome.

First, the library menu itself got better. [Arun](https://twitter.com/node_monk) made it easy to [clear your entire library](https://github.com/excalidraw/excalidraw/pull/2997), and we later introduced a way to select specific items so you can delete, or export them individually.

Installing was improved as well, as Aakansha did some digging and [found out](https://github.com/excalidraw/excalidraw/pull/3299) we can reuse the editor's browser tab when installing libraries.

And Arun [made sure](https://github.com/excalidraw/excalidraw-libraries/pull/106) the library page supports dark theme same as Excalidraw does.

https://twitter.com/excalidraw/status/1402374369670832131

Many more goodies are coming next year, but the above made installing already a pleasant experience.

Everyone loves using libraries, but many of you also love creating and sharing your own (thank you!). The not so fun part is publishing and the busywork around it. That's why we've been focusing on smoothing out this part of the experience.

Towards the end of year, Aakansha and David have [put a lot of work](https://github.com/excalidraw/excalidraw/pull/4115) into streamlining the publishing experience so that you don't have to manually create GitHub pull requests. We've also started requiring the authors to name invidiual library items — this will help everyone when searching for specific items they need, support for which will be added in early 2022.

https://twitter.com/aakansha1216/status/1461045987678453760

### Collaboration

Live-collaborating with people has been an important pillar right from the start and it remains so.

[Thomas Steiner](https://twitter.com/tomayac) introduced [idle detection](https://github.com/excalidraw/excalidraw/pull/2877) so you know which collaborators aren't active, or who's not looking at the canvas at all (their browser tab isn't focused).

https://twitter.com/excalidraw/status/1357285585937981441

We've upgraded the collaboration server for smoother experience, and fixed some annoying bugs like [layers syncing](https://github.com/excalidraw/excalidraw/pull/4076) issues.

More love will be shown to collaboration support this year!

### Excalidraw for Cisco Webex

We've started to integrate Excalidraw into other great platforms, and first one we've partenered with is Cisco Webex. This allows you to collaborate with people on Excalidraw drawings right within your Cisco meetings!

Read more in our previous [blog post](/webex-meetings-integration).

### npm improvements

Excalidraw isn't just about https://excalidraw.com, or the Excalidraw+ app. We want to empower teams (and individuals) to create great and novel experiences on top of the Excalidraw editor. For this purpose, Excalidraw is not only [open-source](https://github.com/excalidraw/excalidraw) and licensed under MIT, but also available as an [npm package](https://www.npmjs.com/package/@excalidraw/excalidraw).

Since last year, [we've begun](https://github.com/excalidraw/excalidraw/pull/3614) to publish each commit deployed to the production branch so you don't have to wait for a new stable release. You can check out the package at [@excalidraw/excalidraw-next](https://www.npmjs.com/package/@excalidraw/excalidraw-next).

There have been multiple improvements to the Excalidraw React component. Probably the biggest was Aakansha's adding support for [multiple Excalidraw components on the same page](https://github.com/excalidraw/excalidraw/issues/3043), and [rendering inside scrollable containers](https://github.com/excalidraw/excalidraw/pull/3018).

Among many other changes, we've started [exporting TypeScript definitions](https://github.com/excalidraw/excalidraw/pull/3337), allowed you to change the [static assets path](https://github.com/excalidraw/excalidraw/pull/3068), while Arun added support [customizing canvas actions](https://github.com/excalidraw/excalidraw/pull/3364), and David made it easier for third party apps to [install libraries](https://github.com/excalidraw/excalidraw/pull/3227).

# What's next

While the last year was big, let's make 2022 bigger still.

Tell us your wishes, complaints, or better yet, come [help us](https://github.com/excalidraw/excalidraw/issues) make Excalidraw even better! 🚀

Thank you for a great year, and here's to the next one!

Excalidraw Team

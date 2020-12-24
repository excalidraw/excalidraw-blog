---
title: One Year of Excalidraw
date: 2021-01-02
author: Excalidraw Team
link: https://github.com/orgs/excalidraw/people
image: og.png
---

> It's been kind of a different year, but it was the first year and pretty amazing for [Excalidraw](https://excalidraw.com).

<!-- end -->

Excalidraw started as a way to procrastinate on January 1st, 2020, and ended up being a fully fledged product only one year later! In this post, we'll go over the most important features that made Excalidraw what it is, today.

I think we should start with the traffic Excalidraw received. We ended the year at **20k weekly active users** which is pretty incredible for a project that was started only a year ago.

https://excalidraw.com/#json=6443031091740672,amxJZJxlZAlUBLADWIukFg

### Commits

This success was only made possible thanks to the over [100 contributors](https://github.com/excalidraw/excalidraw/graphs/contributors) that helped us ship new features, improvements, and fixes right to production.

https://excalidraw.com/#json=6671570797854720,bqkIFBlioHfMMLYHtcdGjA

## Tech stack

Excalidraw is fully open source, but it also stands on the shoulders of many other projects. We couldn't do it without [Rough.js](https://github.com/rough-stuff/rough), the library that gives Excalidraw its unique look, and [React](https://github.com/facebook/react), of course. [TypeScript](https://github.com/microsoft/TypeScript) is also essential to tame the complexity of our codebase, giving a helping hand to new contributors (and old ones alike). Our full list of [dependencies](https://github.com/excalidraw/excalidraw/network/dependencies) is listed on GitHub.

In addition, Excalidraw was made possible thanks to awesome services such as [Vercel](https://vercel.com/) for hosting and pull request previews, [Crowdin](https://crowdin.com/project/excalidraw) for managing dozens of translations, [CodeSandbox](https://codesandbox.io/) for easy hacking on the project, [Sentry](https://sentry.io/) for error reporting, and [Dependabot](https://github.blog/2020-06-01-keep-all-your-packages-up-to-date-with-dependabot/) to keep our dependencies up to date.

## Some of our coolest features

### 🤝 Collaboration

When the lockdown started, companies all around the world struggled to adapt to remote work. [idlewinn](https://github.com/idlewinn) and [petehunt](https://github.com/petehunt) [implemented live collaboration](https://github.com/excalidraw/excalidraw/pull/879) to enable it to be used for interviews, brainstorming, presentations, and more. If you're curious, we [explained how it works in a blog post](/building-excalidraw-p2p-collaboration-feature/).

### 🔒 Your data is encrypted

Many of Excalidraw use cases involve drawing sensitive data. As such, we architected our system so that our servers never see the content of your drawings, using end-to-end encryption. The [backend](https://github.com/excalidraw/excalidraw-json) support for storing data was implemented by [lipis](https://github.com/lipis), while the [client-side encryption itself](https://github.com/excalidraw/excalidraw/pull/642) was added by [vjeux](https://github.com/vjeux). Read how we are doing it in our article on [end-to-end encryption](/end-to-end-encryption/).

### 🇺🇳 Translations

It was important for us early on to make sure that Excalidraw was translated into many languages so that it could be used all over the world. The [initial implementation](https://github.com/excalidraw/excalidraw/pull/638) was done by [fernandoalava](https://github.com/fernandoalava), while the automatic integration with our [Crowdin project](https://crowdin.com/project/excalidraw) was set up by [lipis](https://github.com/lipis). Support for right-to-left languages was [implemented](https://github.com/excalidraw/excalidraw/pull/1154) soon after by [j-f1](https://github.com/j-f1). To top it off, [Ellinor Rapp](https://www.myfonts.com/newsletters/cc/200712.html) designed new glyphs for several non-latin languages and added them to the Virgil hand-written font we're using. You can read more [about how we manage translations on the blog](/enabling-translations/).

### 📱 Mobile first

Touch support and mobile-optimized layout [were](https://github.com/excalidraw/excalidraw/pull/787) [first](https://github.com/excalidraw/excalidraw/pull/788) [added](https://github.com/excalidraw/excalidraw/pull/790) by [j-f1](https://github.com/j-f1). This includes the creation of a toolbar for mobile devices that displays relevant controls while still leaving most of the screen free for the canvas.

### 📚 Library

The library was [first implemented](https://github.com/excalidraw/excalidraw/pull/1787) by [petehunt](https://github.com/petehunt). Later, after adding support for exporting the library to a file, we eventually introduced a public directory for libraries. Visit [libraries.excalidraw.com](https://libraries.excalidraw.com) for more.

### 📊 Excalicharts

While we aim to keep Excalidraw simple to use, sometimes we hide little easter eggs that you need to find out for yourself (or find some hints by following our [Twitter account](https://twitter.com/excalidraw)). For example, you can copy any two-column dataset from a spreadsheet, or comma separated values (CSV) from a text file, and paste them into Excalidraw to quickly produce a chart. The [first implementation](https://github.com/excalidraw/excalidraw/pull/1723) was done by [petehunt](https://github.com/petehunt) and several [improvements](https://github.com/excalidraw/excalidraw/pull/2495) were made by [lipis](https://github.com/lipis).

### ✍️ Free Draw mode

The [free hand draw](https://github.com/excalidraw/excalidraw/pull/1570) was added by [kbariotis](https://github.com/kbariotis).

### #️⃣ Grid and Stats

From early on people were asking for more precision in their hand drawn diagrams. We complied by adding the [grid support](https://github.com/excalidraw/excalidraw/pull/1788) implemented by [dai-chi](https://github.com/dai-shi) and—inspired by _YouTube's stats for nerds_—our own version of [stats](https://github.com/excalidraw/excalidraw/pull/2453) implemented by [lipis](https://github.com/lipis). Both features could be found under the context menu from the canvas.

### 💾 File system integration and file handling

In Excalidraw, we use the [browser-nativefs](https://github.com/GoogleChromeLabs/browser-nativefs) library to integrate with the file system of the operating system. This allows us to support a true open→edit→save workflow with proper over-saving and save-as on supported browsers, with a fallback to file uploads and downloads on other browsers. Read more about this feature in [tomayac](https://github.com/tomayac)'s [earlier article](/browser-nativefs/) on this blog. We also have [experimental support](https://web.dev/file-handling/#demo) for file type association, so that when you double-click an `.excalidraw` file in your file explorer, the Excalidraw PWA opens.

### ⚙️ Gatsby plugin

We also have a plugin for Gatsby that automatically converts links to saved Excalidraw drawings to inline SVG at build time. We are actually using it in this post for our charts. Implemented by [trevorblades](https://github.com/trevorblades) & [j-f1](https://github.com/j-f1), and you can find it under [@excalidraw/gatsby-embedder-excalidraw](https://github.com/excalidraw/gatsby-embedder-excalidraw).

### 📦 npm package

One of the last things we've introduced this year was a completely rewritten npm package, available at [`@excalidraw/excalidraw`](https://www.npmjs.com/package/@excalidraw/excalidraw). A long time in the making (thanks to [@aakansha1216](https://twitter.com/aakansha1216) for most of the work), this package allows you to easily embed Excalidraw as a React component into your apps.

## Excalidraw in the news

- https://pakstech.com/blog/draw-diagrams/
- https://dev.to/ndsn/why-excalidraw-is-mightier-than-the-pen-and-the-sword-329f
- https://news.ycombinator.com/item?id=23525648
- https://news.ycombinator.com/item?id=22663435
- https://web.dev/browser-nativefs/

## Get involved

Excalidraw wouldn't have become what it is today without all the wonderful contributions. If you haven't already, you can start today! And remember, it's not just code that makes Excalidraw better. Every bit helps, be it bug reports, translations, suggestions for improvements, or just hanging out on our [Discord chat](https://discord.com/invite/UexuTaE).

## What's next

We will continue working hard on improving the performance, adding features where it makes sense, fixing bugs, working with [designers](https://github.com/excalidraw/excalidraw/issues/2506) to make Excalidraw look better, and more. But whatever we do, we'll try our best to ensure we don't lose the simplicity and charm that makes Excalidraw the product you love. 💕

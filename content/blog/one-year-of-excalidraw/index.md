---
title: One Year of Excalidraw
date: 2020-12-25
author: Excalidraw Team
link: https://github.com/orgs/excalidraw/people
---

> It's been kind of a different year, but it was the first year and pretty amazing for [Excalidraw](https://excalidraw.com).

<!-- end -->

Some words from the big boss [@vjeux](https://twitter.com/vjeux)

> Bla bla bla

## Let's start with some numbers

It's been a nice and steady growth, given that our only marketing is Twitter, and of course all the love that we are receiving over there. We are reaching around **60K visits** per month and the grand total of the visits in our first year is well over **500K**!

### Visits

![Weekly visists](ga-users.png)

### Commits

We have well over [100 contributors](https://github.com/excalidraw/excalidraw/graphs/contributors) to the project and we have almost daily incremental improvments and deployments to production. Everything is updated frequntly and automatically with tools like [Vercel](https://vercel.com/), [Dependabot](https://github.blog/2020-06-01-keep-all-your-packages-up-to-date-with-dependabot/), [Crowdin](https://crowdin.com/project/excalidraw), and others.

https://excalidraw.com/#json=5581555745423360,ey-JjKwlVeZcWNtx_m823A

## Our basic tech stack

Excalidraw is fully open sourced and we rely on many other open source projects. We couldn't do it without [Rough.js](https://github.com/rough-stuff/rough) of course and our main stack among other things is [React](https://github.com/facebook/react) and [TypeScript](https://github.com/microsoft/TypeScript). Our full list of [dependencies](https://github.com/excalidraw/excalidraw/network/dependencies) is listed on GitHub and we are using Dependabot to keep them all up to date.

## Some of our features

### 🤝 Collaboration

Collaborating with multiple users was [first implemented](https://github.com/excalidraw/excalidraw/pull/879) by [idlewinn](https://github.com/idlewinn) and improved gradually. It's end to end encrypted, so you can be safe that your drawings are not seen by anyone that you don't want to.

### 🔒 Your data is encrypted

The [backend](https://github.com/excalidraw/excalidraw-json) support for storing data was implemted by [lipis](https://github.com/lipis) and the client [support for encrypting](https://github.com/excalidraw/excalidraw/pull/642) the data before submiting was done by [vjeux](https://github.com/vjeux). Read more on how we are doing it in [end to end encryption](/end-to-end-encryption/) article.

### 📚 Library

The library was [first introduced](https://github.com/excalidraw/excalidraw/pull/1787) by [petehunt](https://github.com/petehunt). Later after adding support for saving the library as a file, we eventually have a public directory for libraries. Visit [libraries.excalidraw.com](https://libraries.excalidraw.com) for more.

### 📊 Excalicharts

Copy any two columns data from Excel, Spreadsheet or comma separated values (CSV) from a text file and paste them into Excalidraw. The [first implementation](https://github.com/excalidraw/excalidraw/pull/1723) was done by [petehunt](https://github.com/petehunt) and the [improvements](https://github.com/excalidraw/excalidraw/pull/2495) by [lipis](https://github.com/lipis).

### ✍️ Free Draw mode

The [free hand draw](https://github.com/excalidraw/excalidraw/pull/1570) was added by [kbariotis](https://github.com/kbariotis).

### 🏳 Translations

From early on, users were asking for supporting multiple languages. The [final implementation](https://github.com/excalidraw/excalidraw/pull/638) of it was done by [vjeux](https://github.com/vjeux) and the automatic integration with our [Crowdin](https://crowdin.com/project/excalidraw) project was done by [lipis](https://github.com/lipis).

### ⚙️ Gatsby plugin

A plugin for Gatsby where you can very easily insert Excalidraw links and it will convert it to SVG during build time. We are actually using it in this post for our charts. Implemented by [trevorblades](https://github.com/trevorblades) and you can find it under [@excalidraw/gatsby-embedder-excalidraw](https://github.com/excalidraw/gatsby-embedder-excalidraw).

## Conclusion

Bla bla

If you have any question you can always drop by our [discussion](https://github.com/excalidraw/excalidraw/discussions) board and ask whatever you want. Don't be shy, we are all super friendly.

## Get involved

Excalidraw wouldn't be able to become such a product without all the contributors that gave us not only suggestions and reporting bugs, but actual fixes with hunderds of pull requests. Bla bla bla..

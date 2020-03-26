---
title: Enabling Translations
date: 2020-03-22
---

From the early days people asked for [Excalidraw](https://excalidraw.com) to be translated to other languages. Once we implemented Crowdin for translation, the translations came in pretty quick.

<!-- end -->

[![Crowdin Languages](crowdin.png)](https://crowdin.com/project/excalidraw)

For those not familiar, [Crowdin](https://crowdin.com) is a community based translation platform and we wouldn't be able to cope with the demand without it. It's pretty magical.

The amount of work we end up doing on our end is fairly minimal and after we implemented our own [custom implementation](https://github.com/excalidraw/excalidraw/pull/638/files) of i18n support, we left with adding every new string into [`en.json`](https://github.com/excalidraw/excalidraw/blob/master/src/locales/en.json).

The [rest](https://github.com/excalidraw/excalidraw/tree/master/src/locales) is handled by Crowdin and that's why we love it. A few notable features:

- Has an overview of the translation progress of each language
- Users can easily join the project and start contributing to the translations
- It automatically suggests translations for users
- Great integration with GitHub repositories
- Creates pull requests when new translations are being added
- Updates the source file when new strings are being added to the project
- Supports multiple formats
- Stores the configuration file in [`crowdin.yml`](https://github.com/excalidraw/excalidraw/blob/master/crowdin.yml)

So now anyone can join and contribute to our translations!

---

Go ahead and [join the project now](https://crowdin.com/project/excalidraw) if you want to help. If the languages you are looking for are not on the list, please [submit an issue](https://github.com/excalidraw/excalidraw/issues/new) for the request and we'll add it for you.

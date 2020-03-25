---
title: Enabling Translations
date: 2020-03-22
---

From the early days people asked us the [Excalidraw](https://excalidraw.com) to be translatable to other languages and thanks to our contributors that requst landed pretty fast.

<!-- end -->

[![Crowdin Languages](crowdin.png)](https://crowdin.com/project/excalidraw)

We are using the community based translation platform [Crowdin](https://crowdin.com) and we couldn't be able to cope with the demand without it. It's pretty magical.

- We implmenent our own [custom implementation](https://github.com/excalidraw/excalidraw/pull/638/files) of i18n support
- Every new string is being added into [`en.json`](https://github.com/excalidraw/excalidraw/blob/master/src/locales/en.json)
- The [rest](https://github.com/excalidraw/excalidraw/tree/master/src/locales) is handled by Crowdin and that's why we love it
  - Has an overview with progress of how much is being translated in every language
  - Users can easily join the project and start contributing to the translations
  - It automatically suggests you with translations
  - Great integration with GitHub repositories
  - Creates pull requests when new translations are being added
  - Updates the source file when new strings are being added to the project
  - Supports multiple formats
  - Stores the configuration file in [`crowdin.yml`](https://github.com/excalidraw/excalidraw/blob/master/crowdin.yml)

So anyone can join and contribute to our translations. Go ahead and [join the project now](https://crowdin.com/project/excalidraw) if you want to help. If the languages you are looking for is not on the list, please [submit an issue](https://github.com/excalidraw/excalidraw/issues/new) with the request and we'll add it for you.

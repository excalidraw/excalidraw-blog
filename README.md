# Excalidraw Blog

> For news and updates visit: https://blog.excalidraw.com.

## Develop

We are using [Gatsby](https://www.gatsbyjs.com/) and in order to run it locally, execute the following from the root:

```
yarn
yarn start
```

Visit [`localhost:8000`](http://localhost:8000) to test it.

If you need to query something use ['http://localhost:8000/\_\_\_graphql'](http://localhost:8000/___graphql)

## Writing a Blog Post

- Create a new folder inside the `content/blog/`
  - The folder name should follow `kebab-case`
  - Use the slug of the title of the post to name it
- Create `index.md` inside that folder
- Create `og.png` inside that folder for the open graph image
- Add a frontmatter
  - `title`: Use Title Case for Titles
  - `date`: Date in ISO format. Example: `2020-03-12`
  - `note`: Optional. Displayed next to the date when reading a post.
  - `image`: Filename of the open graph image. Example: `og.png`
- The `note` field is usually used to link to the original post when reposting ([example](https://blog.excalidraw.com/reflections-on-excalidraw/))
- Add somewhere the `<!-- end -->` to declare your `excerpt` (it's used on the front page)

# Excalidraw Blog

## Develop

```
yarn
yarn start
```

## Writing a Blog Post

- Create a new folder inside the `content/blog/`
  - The folder name should follow `kebab-case`
  - Use the slug of the title of the post to name it
- Create `index.md` inside that folder
- Add a frontmatter
  - `title`: Use Title Case for Titles
  - `date`: Date in ISO format. Example: `2020-03-12`
  - `note`: Optional
- Add somewhere the `<!-- end -->` to declare your `excerpt` (it's used on the front page)

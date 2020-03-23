const getImage = require("./get-image");

const regex = /^https?:\/\/excalidraw\.com\/#json=/;

exports.shouldTransform = (url) => regex.test(url);
exports.getHTML = async (url) => {
  const svg = await getImage(url);
  return `<a style="box-shadow: none" href="${url}">${svg.replace(
    "<svg",
    '<svg role="img" aria-label="Excalidraw drawing"'
  )}</a>`;
};

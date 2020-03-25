const puppeteer = require("puppeteer");

module.exports = async (url) => {
  // disable sandbox on build env
  const browser = await puppeteer.launch({
    args: process.env.NOW_BUILDER ? ["--no-sandbox"] : [],
  });
  const page = await browser.newPage();
  await page.goto(url);
  await page.click("[aria-label=Export]");
  await page.click("[aria-label='Scale 3 x']");
  const frame = await page.mainFrame();
  const result = await frame.evaluate(
    () =>
      new Promise((resolve) => {
        const button = document.querySelector('[aria-label="Export to SVG"]');
        const link = document.createElement("a");
        delete window.chooseFileSystemEntries;
        document.createElement = () => link;
        link.click = () =>
          fetch(link.href)
            .then((res) => res.text())
            .then(resolve);
        button.click();
      })
  );
  await browser.close();
  return result;
};

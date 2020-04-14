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
      new Promise((resolve, rejec) => {
        try {
          delete window.chooseFileSystemEntries;
          const reader = new FileReader();
          reader.addEventListener("loadend", () => resolve(reader.result));
          reader.addEventListener("error", () => reject(reader.error));
          URL.createObjectURL = (blob) => reader.readAsText(blob);

          const button = document.querySelector('[aria-label="Export to SVG"]');
          button.click();
        } catch (error) {
          reject(error);
        }
      })
  );
  await browser.close();
  console.log("got result", result.slice(0, 100));
  return result;
};

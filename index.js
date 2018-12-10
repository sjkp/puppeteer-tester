const puppeteer = require('puppeteer');
const PuppeteerHar = require('puppeteer-har');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const har = new PuppeteerHar(page);
  await har.start({ path: 'results.har' });

  await page.goto('https://dr.dk');
  await page.screenshot({path: 'example.png'});
  const metrics = await page.metrics();
  console.log(metrics);
  await har.stop();



  await browser.close();
})();
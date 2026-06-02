const { chromium } = require('@playwright/test');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://wishinfinite.com', { waitUntil: 'domcontentloaded' });
  const links = await page.$$eval('a,button,div,span', els => els.map(e => e.textContent && e.textContent.trim()).filter(Boolean).slice(0,100));
  console.log('contains Playground:', links.some(t => t.includes('Playground')));
  console.log('filtered results:');
  console.log(links.filter(t => t.includes('Play') || t.includes('play')));
  await browser.close();
})();

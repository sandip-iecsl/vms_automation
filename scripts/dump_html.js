const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://vms.iecsl.in');
  await page.waitForTimeout(2000); // Wait a bit for page to load
  const html = await page.content();
  console.log(html);
  await browser.close();
})();

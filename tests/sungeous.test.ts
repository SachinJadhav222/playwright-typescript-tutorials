import { test, chromium } from "@playwright/test";
test.use({
  locale: "en_US",
  timezoneId: "America/Los_Angeles",
});
test("US Sun Geolocation", async () => {
  const browser = await chromium.launch({
    slowMo: 5000,
    headless: false,
    // headless: true,
  });
  const context = await browser.newContext();
  await context.setGeolocation({ longitude: 118.2426, latitude: 34.0549 });
  const page = await context.newPage();

  await page.goto(
     "https://www.the-sun.com/money/10667959/amazon-perfect-dupe-skims-dress/"
  );
  //await page.waitForSelector( page.getByRole('button', { name: 'Do not sell or share my information' }))
  const DoNotSellLink = await page.getByRole("button", {
    name: "Do not sell or share my information",
  });
  await DoNotSellLink.scrollIntoViewIfNeeded();
  await DoNotSellLink.isVisible();
  await DoNotSellLink.click();

  const Frame = await page
    .frameLocator('iframe[title="Iframe title"]')
    .getByText("Your Privacy Preferences");

  await Frame.scrollIntoViewIfNeeded();
  await Frame.isVisible();


  //await page.pause();
});

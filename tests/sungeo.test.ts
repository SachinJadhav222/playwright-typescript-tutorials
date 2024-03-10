import { test, chromium } from "@playwright/test";
test.use({
  locale: "en_US",
  timezoneId: "America/Los_Angeles",
});
test("Sun Geolocation", async () => {
  const browser = await chromium.launch({
    slowMo: 5000,
    headless: false,
    // headless: true,
  });
  const context = await browser.newContext();

  // await page.goto('https://www.bing.com');
  await context.setGeolocation({ longitude: 118.2426, latitude: 34.0549 });
  const page = await context.newPage();

  await page.goto(
    // "https://www.thesun.co.uk/royals/26550061/kate-middleton-speaks-first-time-surgery/"
    "https://www.96fm.ie/news/buzz/ekin-su-culculoglu-reveals-reason-for-davide-sanclimenti-spli/"
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

  // await page
  //   .getByRole("button", { name: "Do not sell or share my information" })
  //   .click();
  // await page
  //   .frameLocator('iframe[title="Iframe title"]')
  //   .getByText("Your Privacy Preferences")
  //   .click();
  // await page
  //   .frameLocator('iframe[title="Iframe title"]')
  //   .getByRole("button", { name: "SAVE & EXIT" })
  //   .click();

  //await page.pause();
});

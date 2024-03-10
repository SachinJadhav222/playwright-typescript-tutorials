import { test, expect, chromium } from "@playwright/test";
test.use({
  locale: "en_US",
  timezoneId: "America/Los_Angeles",
});

const browser = await chromium.launch({
  slowMo: 5000,
  headless: false,
  // headless: true,
});
const context = await browser.newContext();
const page = await context.newPage();
test("test", async ({ page }) => {
  await page.goto(
    "https://www.96fm.ie/news/buzz/ekin-su-culculoglu-reveals-reason-for-davide-sanclimenti-spli/"
  );
  await page
    .getByRole("button", { name: "Do not sell or share my information" })
    .click();
  await page
    .frameLocator('iframe[title="Iframe title"]')
    .getByText("Your Privacy Preferences")
    .click();
  await page
    .frameLocator('iframe[title="Iframe title"]')
    .getByRole("button", { name: "SAVE & EXIT" })
    .click();
});

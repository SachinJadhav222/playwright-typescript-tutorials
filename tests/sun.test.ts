import { test, chromium } from "@playwright/test";
test("Sun network", async () => {
  const browser = await chromium.launch({
    slowMo: 10000,
    headless: false,
    // headless: true,
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(
    "https://www.thesun.co.uk/royals/26550061/kate-middleton-speaks-first-time-surgery/"
  );
  await page
    .frameLocator('iframe[title="SP Consent Message"]')
    .getByRole("button", { name: "Accept Cookies" })
    .click();

  const PageFooter = await page
    .locator("#menu-footer")
    .getByRole("link", { name: "Contact Us" });

  await PageFooter.isVisible();
  await PageFooter.scrollIntoViewIfNeeded({
    //slowMo: 5000,
  });

  
  

  // const AdLibRequest = await page.waitForRequest(
  //   "https://bidder.criteo.com/cdb*"
  // );

  // console.log(`Bidder Request URL: ${AdLibRequest.url()}`);
  // console.log(`Bidder Request URL: ${AdLibRequest.postData()}`);

  await page.waitForTimeout(2000);

  const SearchBar = await page.getByRole("button", { name: "Open search bar" });
  await SearchBar.isVisible();
  await SearchBar.scrollIntoViewIfNeeded();

  // await page.route("https://bidder.criteo.com/cdb*", async (route, request) => {
  //   console.log(request.postData());
  //   // await route.continue({
  //   //   pos
  //   // })
  // });
  console.log("<<----------------------------------------------->>");
  const AmazonRequest = await page.waitForRequest(
    "https://fastlane.rubiconproject.com/"
  );
  console.log(`Amazon Request URL: ${AmazonRequest.url()}`);
  console.log(`Amazon Request URL: ${AmazonRequest.postData()}`);

  const AdLibRequest = await page.waitForRequest(
    "https://bidder.criteo.com/cdb*"
  );

  console.log(`Bidder Request URL: ${AdLibRequest.url()}`);
  console.log(`Bidder Request URL: ${AdLibRequest.postData()}`);

  // await page.waitForSelector("//h3[@class='footer-title-services']")

  // const footer= await page.$("//h3[@class='footer-title-services']");

  // await footer?.scrollIntoViewIfNeeded()

  // const RubiconRequest = await page.waitForRequest(
  //   "https://fastlane.rubiconproject.com/a/api/fastlane.json"
  // );
  // console.log(`Request URL: ${RubiconRequest.url()}`);
  // console.log(`Request URL: ${RubiconRequest.postData()}`);

  // await page.waitForRequest
  // await page.waitForLoadState();
  // await page.evaluate(() => {
  //   window.scrollTo(0, document.body.scrollHeight);
  // });

  // await page.waitForTimeout(5000);

  // page.on("request", (request) => {
  //   if(request.url().includes('api.permutive.com')){
  //   console.log(
  //     " Request >>",
  //     request.method(),
  //     request.url(),
  //     request.postData()
  //   );
  //   }
  //});
  // page.on("response", (response) => {
  //   console.log("<<----------------------------------------------->>");
  //   console.log("Response >>", response.request().url(), response.status());
  // });
});

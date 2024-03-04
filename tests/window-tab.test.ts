import { test, expect, Page } from "@playwright/test";

test("Multiple tabs", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/window-popup-modal-demo"
  );

  console.log(page.url());

  const [newWindow] = await Promise.all([
    page.waitForEvent("popup"),
    // page.click("Follow On Twitter")
    page.click("a[title='Follow @Lambdatesting on Twitter']"),
  ]);

  console.log(newWindow.url());
});
test("Multiple pages", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/window-popup-modal-demo"
  );

  console.log(page.url());

  const [multiPages] = await Promise.all([
    page.waitForEvent("popup"),
    // page.click("Follow On Twitter")
    page.click("#followboth"),
  ]);

  await multiPages.waitForLoadState();
  const pages = multiPages.context().pages();
  console.log("No of tabs -" + pages.length);

  pages.forEach((tab) => {
    console.log(tab.url());

    // if(tab.url() =="https://www.facebook.com/lambdatest/"){
    //     faceBookPage =
    // }
  });

  let faceBookPage: Page;

  for (let index = 0; index < pages.length; index++) {
    const url = pages[index].url();
    if (url == "https://www.facebook.com/lambdatest/") {
      faceBookPage = pages[index];
    }

     const text = await faceBookPage.textContent("//h1")
    console.log(text);
  }
});

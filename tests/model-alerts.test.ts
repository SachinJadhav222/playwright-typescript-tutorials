import { test, expect } from "@playwright/test";

test("Simple Model", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo"
  );

  await page.click("//button[@data-target='#myModal']");
  await page.click("//button[text()='Save Changes'][1]");
});

test("Select dropdown", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
  );

  await page.selectOption("#select-demo", {
    // label:"Monday"
    //  value:"Monday"
    index: 4,
  });

  //  await page.waitForTimeout(2000)

  //  expect(page.locator("//p[@class='selected-value text-size-14']")).toContainText("Reyaansh")
  expect(page.locator(".selected-value.text-size-14")).toContainText(
    "Wednesday"
  );
});
test("Multiple Select dropdown", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
  );


  await page.selectOption("#multi-select", [
    {
      label: "Texas",
    },
    {
      value: "Florida",
    },
    {
      index: 3,
    },
  ]);

    await page.waitForTimeout(2000)

});

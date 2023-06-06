import {test,expect} from '@playwright/test'

test("Multiple tabs",async ({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo")

    console.log(page.url())

    const [newWindow]=await Promise.all([
        page.waitForEvent("popup"),
       // page.click("Follow On Twitter")
        page.click("a[title='Follow @Lambdatesting on Twitter']")
    ])

    console.log(newWindow.url())

})
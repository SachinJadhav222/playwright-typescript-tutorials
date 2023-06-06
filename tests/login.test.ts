import {test,chromium} from '@playwright/test'
test('Login test demo',async ()=>{

    const browser= await chromium.launch({
        headless:false,
    })
    const context=await browser.newContext()
    const page= await context.newPage()

    await page.goto("https://ecommerce-playground.lambdatest.io/")
    await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]")
    await page.click("text=Login")

    await page.fill("input[name='email']","saxc8@hotmail.com")
    await page.fill("input[name='password']","Password123")

    await page.click("input[value='Login']")
    await page.waitForTimeout(5000)

    // this will launch new Tab , this will save saem session
    const page1= await context.newPage()
    await page1.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/account")
    await page1.waitForTimeout(5000)

    //This will create open new browser , no session saved
    const newContext= await browser.newContext()
    const page2= await newContext.newPage()
    await page2.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/account")
    await page2.waitForTimeout(5000)

})
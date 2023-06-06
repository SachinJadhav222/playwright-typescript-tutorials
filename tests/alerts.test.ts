import {test,expect} from '@playwright/test'

test('Alert box',async({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")
    
    page.on("dialog",async (alert)=>{
        const text=alert.message()
        console.log(text)
        await alert.accept()
    })
    const clickMeButton=page.locator("button:has-text('Click Me')").nth(0)

    await clickMeButton.click()

   // expect(page.locator("id=confirm-demo")).toContainText("Cancel!")


})
test('Alert box with Confirmation button ',async({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")
    
    page.on("dialog",async (alert)=>{
        const text=alert.message()
        console.log(text)
        await alert.dismiss()
    })
    const clickMeButton=page.locator("button:has-text('Click Me')").nth(1)

    await clickMeButton.click()
    expect(page.locator("id=confirm-demo")).toContainText("Cancel!")
})
test('Prompt alert ',async({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")
    
    page.on("dialog",async (alert)=>{
        const text=alert.defaultValue()
        console.log(text)
        await alert.accept("Soham Reyaansh")
    })
    const clickMeButton=page.locator("button:has-text('Click Me')").nth(2)

    await clickMeButton.click()

    expect(page.locator("id=prompt-demo")).toContainText("Reyaansh")

})

// test('Checkbox',async({page})=>{
//     await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo")

//     const checkBox= page.locator("id=isAgeSelected")

//     expect(checkBox).not.toBeChecked()

//     await checkBox.check()

//     expect(checkBox).toBeChecked()
// })
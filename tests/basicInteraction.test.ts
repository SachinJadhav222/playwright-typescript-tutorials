import {test,expect} from '@playwright/test'

test('Interactions with input',async({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo")
    const messageInput=page.locator("input#user-message")
    await messageInput.scrollIntoViewIfNeeded()
    await messageInput.scrollIntoViewIfNeeded()
    console.log(await messageInput.getAttribute('placeholder'))

    expect(messageInput).toHaveAttribute('placeholder','Please enter your Message')

    console.log(await messageInput.inputValue())

    await messageInput.type("Soham & Reyaansh")

    console.log(await messageInput.inputValue())

})

test('Checkbox',async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo")

    const checkBox= page.locator("id=isAgeSelected")

    expect(checkBox).not.toBeChecked()

    await checkBox.check()

    expect(checkBox).toBeChecked()
})
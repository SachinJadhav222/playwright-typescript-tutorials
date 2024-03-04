import {test,expect} from '@playwright/test'



test('Download files',async({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/download-file-demo")

})
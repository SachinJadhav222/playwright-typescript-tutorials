import {test,expect} from '@playwright/test'

import moment from 'moment'

test('Date fill',async({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo")

    let date="2018-08-21"

    await page.fill("id=birthday",date)

    await page.waitForTimeout(3000)

})

test('Date using movement',async({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo")

    

    await selectDate(21,"August 2018")

    await page.reload()

    await selectDate(21,"August 2028")


    async function selectDate(date:number , monthAndYear:string){
        await page.getByPlaceholder("Start date").click()
    const mmYY= page.locator("(//th[@class='datepicker-switch'])[1]")
    const prev= page.locator("(//th[@class='prev'])[1]")
    const next= page.locator("(//th[@class='next'])[1]")

    //let dateToSelect="December 2029"

    const thisMonth= moment(monthAndYear,"MMM YYYY").isBefore()

    while (await mmYY.textContent() != monthAndYear){
        if(thisMonth){
           await prev.click()
        }else{
           await next.click()
        }
    }
   
    //await prev.click()
    await page.click(`//td[@class='day'][text()='${date}']`)
}

    await page.waitForTimeout(5000)

})
import {test,expect} from '@playwright/test'

test('Frame Test ',async({page})=>{
    await page.goto("https://letcode.in/frame")

    const numberOfFrames=page.frames();

    console.log("number of frames= "+numberOfFrames.length)

    const myframe= page.frame("firstFr")
  // ? here will check if the frame is null 
    await myframe?.fill("input[name='fname']","Soham")
    await myframe?.fill("input[name='lname']","Jadhav")

    expect(await myframe?.locator("page.has-text-info").textContent()).toContain("You have entered Jadhav")

    await page.waitForTimeout(3000)
})

test('Frame Test 02 ',async({page})=>{
    await page.goto("https://letcode.in/frame")

    const numberOfFrames=page.frames();

   const myframe = page.frameLocator("#firstFr")

   await myframe.locator("input[name='fname']").fill("Reyaansh")
   await myframe.locator("input[name='lname']").fill("Jadhav")

     await page.waitForTimeout(3000)
})

test('Nested Frame Test ',async({page})=>{
    await page.goto("https://letcode.in/frame")

    const numberOfFrames=page.frames();

   const myframe = page.frameLocator("#firstFr")

   await myframe.locator("input[name='fname']").fill("Reyaansh")
   await myframe.locator("input[name='lname']").fill("Jadhav")

  const innerFrame= myframe.frameLocator("iframe[src='innerFrame']")
  await innerFrame.locator("input[name='email']").fill("test@email.com")
  await page.waitForTimeout(1000)
  await myframe.locator("input[name='fname']").fill("Soham")

     await page.waitForTimeout(3000)
})
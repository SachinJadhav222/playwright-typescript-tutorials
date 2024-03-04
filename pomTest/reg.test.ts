import {test,expect} from '@playwright/test'
import RegisterPage from '../pages/registrationPage'
import LoginPage from '../pages/loginPage'


const newLocal = "JADHAV"
test("Reg Test 01", async ({page, baseURL})=>{
    const register=new RegisterPage(page)
    await page.goto(`${baseURL}route=account/register`)

    register.enterFirstName("SACHIN")
    register.enterLastName(newLocal)

})
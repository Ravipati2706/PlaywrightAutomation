 /* To Handle this hidden elements in dynamic dropdowns like redbus we have one catch that 
inspect the page and go to selectors hub and click on settings option on the right side and go to ignore list option
and uncheck the option called "Content script injected by extensions" */

const { test, expect } = require('@playwright/test')

test('HiddenDropdownElementsValidation', async ({ page }) => {

await page.goto('https://www.redbus.com/')

await page.locator('#src').fill('Hyderabad')

    await page.waitForSelector("//div[@class='mainelm']//li")

    const fromCityOptions=await page.$$("//div[@class='mainelm']//li")

    for(let option of fromCityOptions)
    {
        const value=await option.textContent()
        console.log(value);
        if(value.includes('Hyderabad, Telangana, India'))
        {
            await option.click()
            break;

        }
    }

    await page.waitForTimeout(5000);

})
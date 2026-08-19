//const {test, expect} = require('@playwright/test')
import {test, expect} from '@playwright/test'
test('page screenshot', async ({page}) => {
    await page.goto('https://www.demoblaze.com/index.html')
    await page.screenshot({ path:'tests/Screenshots/'+Date.now() +'Homepage.png'})  
})

test('Full page screenshot', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html')
    await page.screenshot({ path:'tests/screenshots/'+Date.now()+'FullPage.png',fullPage:true})
});

test('Element screenshot', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html')
    await page.locator('//*[@id="tbodyid"]/div[1]/div').screenshot({ path:'tests/screenshots/'+Date.now()+'Macbook.png'})
});
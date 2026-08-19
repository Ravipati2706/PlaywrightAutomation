const { test, expect } = require('@playwright/test')
test('Mouseover Actions', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    const pointme = await page.locator('.dropbtn')
    const mobiles = await page.locator("//a[normalize-space()='Mobiles']")

    //mouse hover
    await pointme.hover()
    await  mobiles.hover()
    await page.waitForTimeout(5000)


})
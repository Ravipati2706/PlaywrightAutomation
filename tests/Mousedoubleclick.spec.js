const { test, expect } = require('@playwright/test')

test('Mouse Double Click', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    const copytextbutton = await page.locator("//button[normalize-space()='Copy Text']")

    //double click action
    await copytextbutton.dblclick()

    const field2 = await page.locator('#field2')
    await expect(field2).toHaveValue('Hello World!')

    await page.waitForTimeout(5000)




})
const { test, expect } = require('@playwright/test');
test('InputboxValidations', async ({ page }) => {

    //Inputbox Validations
    await page.goto('https://testautomationpractice.blogspot.com/');
    await expect(await page.locator('#name')).toBeVisible();
    await expect(await page.locator('#name')).toBeEmpty();
    await expect(await page.locator('#name')).toBeEnabled();
    await expect(await page.locator('#name')).toBeEditable();

    await page.locator('#name').fill('Ravi');
})
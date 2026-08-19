const { test, expect } = require('@playwright/test');
test('SoftAssertions', async ({ page }) => {
    page.goto('https://the-internet.herokuapp.com/');
    //Hard Assertions
    /* await expect (page).toHaveURL('https://the-internet.herokuapp.com/');
    await expect(page).toHaveTitale('The Internet');
    await expect(page.locator('.heading')).toHaveText('Welcome to the-internet'); */
    

    //soft Assertions
    await expect.soft(page).toHaveURL('https://the-internet.herokuapp.com/');
    await expect.soft(page).toHaveTitle('The Internet');
    await expect.soft(page.locator('.heading')).toHaveText('Welcome to the-internet');
})
//const { test, expect } = require('@playwright/test'); ----> one way to import the test and expect functions from the Playwright testing library

import { test, expect } from '@playwright/test'; //----> another way to import the test and expect functions from the Playwright testing library
test('Locators', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    const pageTitle = await page.title();
    console.log('Page title is: ' + pageTitle);
    await expect(pageTitle).toBe('Test Login | Practice Test Automation');

    // Fill in the username fields using CSS selectors
    // await page.locator('#username').fill('student');
    await page.fill('#username', 'student');

    // Fill in the password fields using CSS  and xpathselectors
    //await page.locator('#password').fill('Password123');
    await page.fill("//input[@id='password']", 'Password123');
    // Click on the "Submit" button using a CSS selector
    await page.locator('#submit').click();

    const logoutLink = await page.locator("//a[normalize-space()='Log out']");
    console.log('Logout link is visible: ' + await logoutLink.isVisible());

    //Finding how many links are there on the page using CSS
    const links = await page.$$('a');
    for (const link of links) {
        const linkText = await link.textContent();
        console.log('Number of links on the page: ' + links.length);
        console.log('Link text: ' + linkText);
    }
    await page.close
})

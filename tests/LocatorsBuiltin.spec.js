/*
page.getByAltText()       // Locate an element (usually an image) by its alt text.

page.getByPlaceholder()   // Locate an input field by its placeholder text.

page.getByRole()          // Locate an element by its ARIA role (recommended by Playwright).

page.getByText()          // Locate an element by its visible text.

page.getByLabel()         // Locate a form control by its associated label.

page.getByTitle()         // Locate an element by its title attribute.

page.getByTestId()        // Locate an element using the data-testid attribute.
*/

import { test, expect } from '@playwright/test';
test('Locators Builtin', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    // page.getByAltText() ------>  Locate an element (usually an image) by its alt text.

    const logo = await page.getByAltText('company-branding')
    await expect(logo).toBeVisible()

    //page.getByPlaceholder()   // Locate an input field by its placeholder text.
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')

    //page.getByRole()          // Locate an element by its ARIA role (recommended by Playwright).
    await page.getByRole('button', { name: 'Login' }).click()

    //page.getByText()------> Locate an element by its visible text.
    const name = await page.locator('//p[@class="oxd-userdropdown-name"]').textContent()
    await expect(await page.getByText(name)).toBeVisible()

})
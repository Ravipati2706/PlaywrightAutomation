const { test, expect } = require('@playwright/test')
test('CheckboxValidation', async ({ page }) => {

    // Navigate to the application
    page.goto('https://testautomationpractice.blogspot.com/')

    // --------------------------------------------------
    // 1. Select a single checkbox and verify it is checked
    // --------------------------------------------------

    const sundaycheckbox = page.locator('#sunday')

    // Check Sunday
    await sundaycheckbox.check()

    // Verify Sunday is checked

    await expect(sundaycheckbox).toBeChecked()

    // =========================================================
    // 2. Select MULTIPLE checkboxes using an array + for loop
    // =========================================================

    const days = ['monday', 'tuesday', 'wednesday']
    for (const day of days) {
        // Locate checkbox using its label
        const checkbox = page.getByLabel(day)

        // Check the checkbox
        await checkbox.check();

        // Verify checkbox is checked
        await expect(checkbox).toBeChecked();
    }

    // =========================================================
    // 3. Uncheck all selected checkboxes
    //    and verify they are unchecked
    // =========================================================

    // Uncheck Sunday
    await sundayCheckbox.uncheck();

    // Verify Sunday is unchecked
    await expect(sundayCheckbox).not.toBeChecked();
    

    // Uncheck Monday, Tuesday, Wednesday using loop
    for (const day of days) {

        const checkbox = page.getByLabel(day);

        await checkbox.uncheck();
        await expect(checkbox).not.toBeChecked();

    }

    await page.waitForTimeout(5000)
})

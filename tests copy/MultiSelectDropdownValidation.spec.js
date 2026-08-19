const { test, expect } = require('@playwright/test');

test('Multi-Select Dropdown Validation', async ({ page }) => {

    // Navigate to application
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Locate multi-select Colors dropdown
    const colorsDropdown = page.locator('#colors');

    // --------------------------------------------------
    // 1. Select multiple options
    // --------------------------------------------------

    await colorsDropdown.selectOption(['Blue', 'Red', 'Yellow']);

    // Verify selected options
    await expect(colorsDropdown).toHaveValues([
        'red',
        'blue',
        'yellow'
    ]);


    // --------------------------------------------------
    // 2. Clear selection
    // --------------------------------------------------

    await colorsDropdown.selectOption([]);


    // --------------------------------------------------
    // 3. Check number of options - Approach 1
    // Using Playwright Locator
    // --------------------------------------------------

    const options = colorsDropdown.locator('option');

    await expect(options).toHaveCount(7);


    // --------------------------------------------------
    // 4. Check number of options - Approach 2
    // Using $$()
    // --------------------------------------------------

    const optionList = await page.$$('#colors option');

    console.log('Number of options:', optionList.length);

    expect(optionList.length).toBe(7);


    // --------------------------------------------------
    // 5. Check presence of value
    // Using allTextContents() + trim()
    // --------------------------------------------------

    const optionTexts = await options.allTextContents();

    // Remove extra spaces and new lines
    const cleanedOptionTexts = optionTexts.map(text => text.trim());

    console.log('Available options:', cleanedOptionTexts);

    // Verify White is present
    expect(cleanedOptionTexts).toContain('White');

    // Verify Black is NOT present
    expect(cleanedOptionTexts).not.toContain('Black');


    // --------------------------------------------------
    // 6. Select multiple options
    // --------------------------------------------------

    await colorsDropdown.selectOption(['Green', 'White']);


    // --------------------------------------------------
    // 7. Verify selected options
    // --------------------------------------------------

    await expect(colorsDropdown).toHaveValues([
        'green',
        'white'
    ]);

});
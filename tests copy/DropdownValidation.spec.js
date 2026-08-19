const { test, expect } = require('@playwright/test')
test('DropdownValidation', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    //Locate the country dropdown using css locator
    const countryDropdown = page.locator('#country');

    1/* . MULTIPLE WAYS TO SELECT OPTIONS
    Approach 1: Select by visible label / visible text
 */

    await countryDropdown.selectOption({ label: 'India' });

    //Assertion to verify the selected option is India
    await expect(countryDropdown).toHaveValue('india');

    //Approach 2: Select by value
    await countryDropdown.selectOption('usa');
    await expect(countryDropdown).toHaveValue('usa');

    // Approach 3: Select by index
    await countryDropdown.selectOption({ index: 3 });
    console.log('Selected value:', await countryDropdown.inputValue());

    /* 2. ASSERTIONS 2.1 Check number of options - Approach 1
   Using locator count() */


    const options = countryDropdown.locator('option');

    const optionCount = await options.count();

    console.log('Number of options:', optionCount);

    expect(optionCount).toBe(10);



    /* 2.2 Check number of options - Approach 2
     Using allTextContents() */

    const optionTexts = await options.allTextContents();

    console.log('All dropdown options:', optionTexts);

    expect(optionTexts.length).toBe(10);

    /* 3. CHECK PRESENCE OF VALUE IN DROPDOWN
    3.1 Check presence of value - Approach 1
     Using locator
 */

    const indiaOption = countryDropdown.locator('option[value="india"]');
    await expect(indiaOption).toHaveCount(1);

    // 3.2 Check presence of value - Approach 2
    // Using loop
    let valueFound = false;

    for (const option of optionTexts) {

        if (option.trim() === 'India') {
            valueFound = true;
            break;
        }
    }

    expect(valueFound).toBeTruthy();
    console.log('Is India present?', valueFound);

    //4. SELECT OPTION USING LOOP
    const countryToSelect = 'Germany';

    for (const option of optionTexts) {

        if (option.trim() === countryToSelect) {

            await countryDropdown.selectOption({
                label: countryToSelect
            });

            break;
        }
    }

    // Verify that Germany is selected
    await expect(countryDropdown).toHaveValue('germany');

    console.log(
        'Selected country:',
        await countryDropdown.inputValue()
    );

    await page.waitForTimeout(5000);
})
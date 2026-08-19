const { test, expect } = require('@playwright/test');
test('RadioButtonValidation', async ({ page }) => {

    page.goto('https://testautomationpractice.blogspot.com/');

    /* //RadioButton Validations
    await page.locator('#male').check();
    await expect(await page.locator('#male')).toBeChecked();
    await expect(await page.locator('#male')).isChecked().toBeTruthy();
    //const isFemaleChecked = await page.locator('#female').isChecked();

    // female radio button is not checked, so the assertion will pass option 1
    //await expect(page.locator('#female')).not.toBeChecked();

    /* const isFemaleChecked = await page.locator('#female').isChecked();  ---> option2
    expect(isFemaleChecked).toBeFalsy(); */ 

    ///*  */Radio Button Validations
    const maleRadio = page.locator('#male');
    const femaleRadio = page.locator('#female');

    // Select Male
    await maleRadio.check();

    // Verify Male is checked
    await expect(maleRadio).toBeChecked();

    // Verify Female is not checked
    await expect(femaleRadio).not.toBeChecked();

    await page.waitForTimeout(5000);
});
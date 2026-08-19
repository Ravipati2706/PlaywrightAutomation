const { test, expect } = require('@playwright/test');
//----> another way to import the test and expect functions from the Playwright testing library
//import { test, expect } from '@playwright/test'; //-
test('Assertions', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');

  // 1. toHaveURL()
  // Verify that the page has the expected URL
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/');

  // 2. toHaveTitle()
  // Verify that the page has the expected title
  await expect(page).toHaveTitle('The Internet');

  // 3. toBeVisible()
  // Verify that the "A/B Testing" link is visible
  const abTestLink = page.getByText('A/B Testing');
  await expect(abTestLink).toBeVisible();

  // Navigate to Checkboxes page
  await page.locator("//a[normalize-space()='Checkboxes']").click();

  // 4. toBeEnabled() / toBeDisabled()
  // Verify that the checkbox is enabled
  const checkbox1 = page.locator("#checkboxes input").nth(0);
  await expect(checkbox1).toBeEnabled();

  // Verify that the second checkbox is enabled
  const checkbox2 = page.locator("#checkboxes input").nth(1);
  await expect(checkbox2).toBeEnabled();

  // 5. toBeChecked()
  // Check the first checkbox
  await checkbox1.check();

  // Verify that the first checkbox is checked
  await expect(checkbox1).toBeChecked();

  // 6. toHaveAttribute()
  // Verify that the checkbox has the "type" attribute with value "checkbox"
  const checkbox11 = page.locator("#checkboxes input").nth(0);
  await expect(checkbox11).toHaveAttribute("type", "checkbox");

  //Navigating to Home page
  await page.goto('https://the-internet.herokuapp.com/');


  // Navigate to Add Elements page
  await page.locator("a[href='/add_remove_elements/']").click();


  // 7. toHaveText()
  // Verify that the button has exactly the text "Add Element"
  await expect(await page.locator(".example button")).toHaveText("Add Element")

  // 8. toContainText()
  // Verify that the button contains the text "Add"
  await expect(await page.locator(".example button")).toContainText("Add")

  // Navigate to Inputs page
  await page.goto('https://the-internet.herokuapp.com/inputs');

  const inputBox = page.locator('input[type="number"]');

  // Enter a value
  await inputBox.fill('123');


  // 9. toHaveValue()
  // Verify that the input contains the value "123"
  await expect(inputBox).toHaveValue('123')

  // Navigate back to Add/Remove Elements page
  await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');

  // Add 3 Delete buttons
  await page.getByText('Add Element').click();
  await page.getByText('Add Element').click();
  await page.getByText('Add Element').click();


  // 10. toHaveCount()
  // Verify that there are exactly 3 Delete buttons
  const deleteButtons = page.getByText('Delete');
  await expect(deleteButtons).toHaveCount(3);

})

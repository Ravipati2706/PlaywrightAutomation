import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('body').click();
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.getByRole('textbox', { name: 'Enter Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Name' }).fill('RAvi');
  await page.getByRole('textbox', { name: 'Enter EMail' }).click();
  await page.getByRole('textbox', { name: 'Enter EMail' }).fill('ravinjadjjds');
  await page.getByRole('textbox', { name: 'Enter Phone' }).click();
  await page.getByRole('textbox', { name: 'Enter Phone' }).fill('afs1324');
  await page.getByRole('textbox', { name: 'Address:' }).click();
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.locator('#post-body-1307673142697428135').getByRole('button', { name: 'Submit' }).click();
});
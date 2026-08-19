const {test, expect} = require('@playwright/test');

test('InternetPage', async ({page}) => {

    await page.goto('https://the-internet.herokuapp.com/');

    const pageTitle = await page.title();
    console.log('Page title is: ' + pageTitle);
    await expect(pageTitle).toBe('The Internet');
    const pageUrl = page.url();
    console.log('Page URL is: ' + pageUrl);
    await expect(pageUrl).toBe('https://the-internet.herokuapp.com/');
    await page.close();

});

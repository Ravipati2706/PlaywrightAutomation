const { test, expect } = require('@playwright/test');
test('HiddenFramesHandling', async ({ page }) => {

    await page.goto('https://ui.vision/demo/webtest/frames/')
    //const frame3 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3.html' })
    const frame3 = page.frameLocator("frame[src='frame_3.html']");
    //await frame3.locator("//input[@name='mytext3']").fill('Hello')

    // Enter nested Google Form iframe
    const nestedFrame = frame3.frameLocator("iframe");

    // Select radio button
    await nestedFrame.locator('//*[@id="i6"]/div[3]/div').click();


    await page.waitForTimeout(5000);


})
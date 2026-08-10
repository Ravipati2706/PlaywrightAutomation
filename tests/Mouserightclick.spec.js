const { test, expect } = require('@playwright/test')
test('Mouse Right Click', async ({ page }) => {
    await page.goto('http://swisnl.github.io/jQuery-contextMenu/demo.html')
    const button = await page.locator('.context-menu-one.btn.btn-neutral')
 //right click action
 await button.click({ button: 'right' })

 await page.waitForTimeout(5000)

})
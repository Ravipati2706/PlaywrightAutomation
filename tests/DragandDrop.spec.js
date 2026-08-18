const { test, expect } = require('@playwright/test')
test('DragandDrop', async ({ page }) => {

    page.goto('https://the-internet.herokuapp.com/drag_and_drop?')

    const source = await page.locator('#column-a')
    const destination = await page.locator('#column-b')

    //Appraoch 1
    /* await source.hover()
    await page.mouse.down()

    await destination.hover()
    await page.mouse.up() */

    //Appraoch 2
    await source.dragTo(destination)

    await page.waitForTimeout(5000)


})
const { test, expect } = require('@playwright/test')
test('Pagination Web Table Handling', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    // Scroll until table is visible

    await page.locator("//h2[normalize-space()='Pagination Web Table']").scrollIntoViewIfNeeded();
    const table = page.locator('#productTable')



    // 1) total number of rows & columns
    const columns = await table.locator('thead tr th')
    console.log('Number of columns:', await columns.count()) //4
    expect(await columns.count()).toBe(4)

    const rows = await table.locator('tbody tr')
    console.log('Number of rows:', await rows.count()) //5
    expect(await rows.count()).toBe(5)

    //2) select check box for product 4
    /* const machedRow= rows.filter({
      has: page.locator('td'),
      hasText: 'Smartwatch'
  })
  await machedRow.locator('input').check()*/

    // 3) select multiple products by re-usable function
    // await selectProduct(rows, page, 'Smartphone')
    // await selectProduct(rows, page, 'Tablet')
    // await selectProduct(rows, page, 'Wireless Earbuds')

    //4) print all product details using loop

    for (let i = 0; i < await rows.count(); i++) { //rows.count()=5
        const row = rows.nth(i); // moving to first row and then second row and so on
        const tds = row.locator('td') // moving to all the columns of that row

        for (let j = 0; j < await tds.count() - 1; j++) { //tds.count()=4, -1 because last column is checkbox
            console.log(await tds.nth(j).textContent()) // printing all the columns data of that row
        }
    }



    //5) read data from all the pages in the table

    const pages = await page.locator('.pagination li a')
    console.log('Number of pages in the table:', await pages.count())

    for (let p = 0; p < await pages.count(); p++) {
        if (p > 0) {
            await pages.nth(p).click()
        }
        for (let i = 0; i < await rows.count(); i++) {
            const row = rows.nth(i);
            const tds = row.locator('td')

            for (let j = 0; j < await tds.count() - 1; j++) {
                console.log(await tds.nth(j).textContent())
            }
        }
    

    }

    await page.waitForTimeout(3000)
})

async function selectProduct(rows, page, name) {
    const machedRow = rows.filter({
        has: page.locator('td'),
        hasText: name
    })
    await machedRow.locator('input').check()
}
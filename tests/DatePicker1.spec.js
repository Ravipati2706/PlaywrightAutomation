const { test, expect } = require('@playwright/test')
test("DatePicker", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    //Required date: 20 March 2026
    const year = "2026"
    const month = "September"
    const date = "20"

    await page.locator('#datepicker').click() // it opens calender
  

    while (true) {

        const currentYear = await page.locator('.ui-datepicker-year').textContent()
        const currentMonth = await page.locator('.ui-datepicker-month').textContent()
        if (currentYear == year && currentMonth == month) {
            break;
        }

        await page.locator("//span[@class='ui-icon ui-icon-circle-triangle-e']").click() // click on next button to move to next month
        //await page.locator('[title="Prev"]').click() //Previous button
 
    }

    const dates = await page.$$("(//td[@data-handler='selectDay'])")

    //date selection using loop
    // for (const dt of dates) {
    //     if (await dt.textContent() == date) {
    //         await dt.click()
    //     }
    // }

    //date selection - wihout loop
    await page.click(`//a[@class='ui-state-default'][text()='${date}']`)

    await page.waitForTimeout(5000);

})
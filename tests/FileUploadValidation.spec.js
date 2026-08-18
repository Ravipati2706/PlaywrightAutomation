
const path = require('path');
const { test, expect } = require('@playwright/test')

test('Single File', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    // =========================================================
    // 1. Locate file upload controls
    // =========================================================

    const fileInputs = page.locator('input[type="file"]');

    console.log('Number of file upload controls:', await fileInputs.count());

    expect(await fileInputs.count()).toBeGreaterThanOrEqual(2);


    // =========================================================
    // 2. Single File Upload
    // =========================================================

    const singleFile = path.join(__dirname, '../tests/UploadFiles/testfile1.pdf');

    await fileInputs.nth(0).setInputFiles(singleFile);

    console.log('Single file uploaded successfully');

})

//------------------------------------------------------------------------------------------------------------------------

//Multiple File Upload

   test.only('Multiple Files',async ({page})=>{

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')

    await page.locator('#filesToUpload')
                .setInputFiles(['tests/uploadFiles/testfile1.pdf',
                                 'tests/uploadFiles/testfile2.pdf']);

    
    expect (await page.locator('#fileList li:nth-child(1)')).toHaveText('testfile1.pdf')
    expect (await page.locator('#fileList li:nth-child(2)')).toHaveText('testfile2.pdf')

    //Removing files
    await page.locator('#filesToUpload').setInputFiles([])
    await page.waitForTimeout(3000)

    expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected')

    await page.waitForTimeout(5000)
})
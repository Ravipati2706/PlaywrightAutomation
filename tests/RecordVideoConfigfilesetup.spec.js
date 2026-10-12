//How to record the script in playwright 

/* Approach-1 is open the terminal and run the command : npx playwright codegen 
It will open the playwright inspector and browser simintaneously. You can record the script by performing the actions 
on the browser and it will generate the code in the inspector.You can copy the code and paste it in your test file.
 Approach-2 is open the terminal and run the command : npx playwright codegen -o tests/mytestrecord.spec.js 
  It will open the playwright inspector and browser simintaneously.It will create a new file with the name mytestrecord.spec.js
   in the tests folder and you can record the script by performing the actions on the browser and it will generate the code 
   in the inspector. You can copy the code and paste it in your test file.
 */

// npx playwright codegen --help This command will give you the list of options available for codegen. 
// You can use the --output option to specify the output file name and path. 
// You can use the --target option to specify the target language. 
// You can use the --device option to specify the device. 
// You can use the --color-scheme option to specify the color scheme. 
// You can use the --locale option to specify the locale. 
// You can use the --timezone-id option to specify the timezone. 
// You can use the --geolocation option to specify the geolocation. 
// You can use the --permissions option to specify the permissions. 
// You can use the --proxy-server option to specify the proxy server. 
// You can use the --user-agent option to specify the user agent. 
// You can use the --viewport-size option to specify the viewport size. 
// You can use the --no-headless option to run in headed mode.
//  You can use the --slow-mo option to slow down execution by a specified amount of milliseconds per action.

//PS C:\Users\Admin\PlaywrightAutomation> npx playwright codegen --help

/*open page and generate code for user actions

Options:
  -o, --output <file name>             saves the generated script to a file
  --target <language>                  language to generate, one of javascript, playwright-test, python, python-async, python-pytest, csharp, csharp-mstest,
                                       csharp-nunit, csharp-xunit, java, java-junit (default: "playwright-test")
  --test-id-attribute <attributeName>  use the specified attribute to generate data test ID selectors
  -b, --browser <browserType>          browser to use, one of cr, chromium, ff, firefox, wk, webkit (default: "chromium")
  --block-service-workers              block service workers
  --channel <channel>                  Chromium distribution channel, "chrome", "chrome-beta", "msedge-dev", etc
  --color-scheme <scheme>              emulate preferred color scheme, "light" or "dark"
  --device <deviceName>                emulate device, for example  "iPhone 11"
  --geolocation <coordinates>          specify geolocation coordinates, for example "37.819722,-122.478611"
  --ignore-https-errors                ignore https errors
  --load-storage <filename>            load context storage state from the file, previously saved with --save-storage
  --lang <language>                    specify language / locale, for example "en-GB"
  --proxy-server <proxy>               specify proxy server, for example "http://myproxy:3128" or "socks5://myproxy:8080"
  --proxy-bypass <bypass>              comma-separated domains to bypass proxy, for example ".com,chromium.org,.domain.com"
  --save-har <filename>                save HAR file with all network activity at the end
  --save-har-glob <glob pattern>       filter entries in the HAR by matching url against this glob pattern
  --save-storage <filename>            save context storage state at the end, for later use with --load-storage
  --timezone <time zone>               time zone to emulate, for example "Europe/Rome"
  --timeout <timeout>                  timeout for Playwright actions in milliseconds, no timeout by default
  --user-agent <ua string>             specify user agent string
  --user-data-dir <directory>          use the specified user data directory instead of a new context
  --viewport-size <size>               specify browser viewport size in pixels, for example "1280, 720"
  -h, --help                           display help for command

  Examples:

    $ codegen
    $ codegen --target=python
    $ codegen -b webkit https://example.com */

const { test, expect } = require('@playwright/test')
test('Record Video Config File Setup', async ({ page }) => {

    //Login to the application

    await page.goto('https://www.demoblaze.com/index.html');
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.getByRole('button', { name: 'Log in' }).click();
    await expect(page.locator('#logout')).toBeVisible()
})


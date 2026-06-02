import {expect, test} from "@playwright/test"

test("Handle New Page", async ({ context }) => {
    
    // 'context' fixture is used instead of 'page' fixture because we need to 
    // monitor the entire browser context for new tabs/pages being opened

    const page = await context.newPage(); 
    // Creates a brand new browser tab/page manually using the context
    // This gives us full control over the page instance

    await page.goto("https://testpages.eviltester.com/styled/windows-test.html"); 
    // Navigates the newly created page to the Windows Links Test URL

    await expect(page).toHaveTitle("Windows Links Test Page | Test Pages"); 
    // Assertion: Verifies the page has loaded correctly by checking its title
    // Test will FAIL here if the title doesn't match — acts as a checkpoint

    const pagePromise = context.waitForEvent("page"); 
    // Sets up a LISTENER on the context BEFORE clicking
    // This is crucial — it waits for a new page/tab to be opened
    // Must be set up BEFORE the click, otherwise the new tab might open 
    // before we start listening and we would miss it

    await page.getByRole('link', { name: 'External site in new tab' }).click();  
    // Clicks the link "External site in new tab" which has target="_blank"
    // This triggers a new tab to open in the browser
    // The context listener we set up above will now capture this new tab

    const newPage = await pagePromise; 
    // Resolves the promise — meaning we now WAIT here until the new tab
    // actually opens and assign it to 'newPage' variable
    // 'newPage' now represents the newly opened tab we can interact with

    await newPage.getByRole('link', { name: 'Open book icon Read The Blog' }).click();
    // Switches interaction to the NEW tab (newPage)
    // Finds the link "Read The Blog" by its accessible role and name
    // Clicks it to navigate further within the new tab

});

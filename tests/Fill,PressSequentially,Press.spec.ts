import {test} from '@playwright/test';

test('Fill method Test', async ({page}) => {
    await page.goto("https://ultimateqa.com/filling-out-forms/")
    await page.locator("#et_pb_contact_name_0").fill("Amrutha Sriram")
    await page.locator("#et_pb_contact_message_0").fill("This is a test message")
    await page.goto("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_global_contenteditable")
    await page.frameLocator('iframe[name="iframeResult"]').getByText('This is a paragraph. It is').fill("This is a test message")

})

test('PressSequentially method Test', async ({page}) => {
      await page.goto("https://www.google.com/")
    //await page.locator("#APjFqb").pressSequentially("Playwright");
      await page.locator("#APjFqb").pressSequentially("Playwright",{delay:200})//with delay between each character

})

test('Press method Test', async ({page}) => {
    await page.goto("https://www.google.com/")
    await page.locator("#APjFqb").pressSequentially("Playwright",{delay:200})
    await page.locator("#APjFqb").press("ArrowDown+ArrowDown+ArrowDown")
    await page.locator("#APjFqb").press("Enter")
    await page.locator("#APjFqb").press("Backspace")
})
import {test} from '@playwright/test';

test("Handle Select Dropdown with Value attribute and Visible text",async({page})=>{
    await page.goto("https://artoftesting.com/samplesiteforselenium")
    await page.locator("#testingDropdown").selectOption("Manual") //selecting option by value attribute's value
    await page.locator("#testingDropdown").selectOption("Database Testing") //selecting option by visible text
    await page.locator("#testingDropdown").selectOption({value:'Performance'}) //selecting option with object=>{value:value attribute's value}
    await page.locator("#testingDropdown").selectOption({label:'Database Testing'}) //selecting option with object=>{label:visible text} as label attribute isn't there
    await page.locator("#testingDropdown").selectOption({index:2});
})


test("Handle Select Dropdown with Label attribute",async({page})=>{
    await page.goto("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_option_label");
    await page.frameLocator('iframe[name="iframeResult"]').getByLabel('Choose a car:').selectOption('Mercedes') //selecting option by label attribute value
    await page.frameLocator('iframe[name="iframeResult"]').getByLabel('Choose a car:').selectOption({label:'Audi'}) //selecting option with object=>{label:label attribute's value}
    //await page.frameLocator('iframe[name="iframeResult"]').getByLabel('Choose a car:').selectOption({label:'Audi (Auto Union Deutschland Ingolstadt)'}) //selecting option with object=>{label:visible text}=>it will fail as label attribute is present


})
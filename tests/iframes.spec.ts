import {test} from '@playwright/test';

test("Handle Iframe with name attribute", async({page})=>{
    await page.goto("https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_input_form");
    const w3Frame = page.frame("iframeResult"); //assigning the iframe component to a variable using name attribute
    await w3Frame?.locator("#fname").fill("Amrutha"); 
})

test("Handle Iframe with URL", async({page})=>{
    await page.goto("https://www.w3schools.com/html/html_iframe.asp");
    const w3Frame2 = page.frame({url:"https://www.w3schools.com/html/default.asp"}); //assigning the iframe component to a variable using URL of iframe
    await w3Frame2?.getByLabel('Button to open search field').click(); //assign the location of element obtained by locator starting from the .getBy part of the location
    await w3Frame2?.getByPlaceholder('Search...').fill("Typescript");

}) //url can be obtained by right-clicking on the frame element on the webpage

test("Handle Iframe with frameLocator Method", async({page})=>{
    await page.goto("https://www.w3schools.com/html/html_iframe.asp");
    //const w3Frame3 = page.frameLocator("[title='W3Schools HTML Tutorial']"); //assigning the iframe component to a variable using frameLocator method and title attribute of the frame element
    //await w3Frame3.getByLabel('Button to open search field').click();
    //await w3Frame3.getByPlaceholder('Search...').fill("Playwright");

    const w3Frame3= page.locator('iframe[title="W3Schools HTML Tutorial"]').contentFrame().getByRole('button', { name: 'Button to open search field' }) //locating element and assigning to a variable
    await w3Frame3.click(); //Performing the action on that element
    const w3Frame4=page.locator('iframe[title="W3Schools HTML Tutorial"]').contentFrame().getByRole('textbox', { name: 'Search field' }) //locating element and assigning to a variable
    await w3Frame4.fill("Javascript"); //Performing the action on that element

}) //this method is easier
import {test} from '@playwright/test'

test("Handle Multi Select Dropdown",async({page})=>{
    await page.goto("https://demoqa.com/select-menu");
    await page.locator("#cars").selectOption('opel'); //selecting options by providing value
    //await page.locator("#cars").selectOption(['Volvo', 'Opel','Audi']) //selecting options by providing an array of visible text
   


})
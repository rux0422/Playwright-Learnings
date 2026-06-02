import {chromium, test} from '@playwright/test';

test('My First Test Script', async({page})=>{
    console.log('This is my first test')
    await page.goto("https://www.google.com")
    await page.getByRole('button', { name: 'Google apps' }).click()

})

//alternatively we can also write the above test script as below without using a page fixture
//test('My First Test Script', async()=>{
    //const browser=await chromium.launch();
   //const context=await browser.newContext();
    //const page=await context.newPage();
    //console.log('This is my first test')
    //await page.goto("https://www.google.com")
   // await page.getByRole('button', { name: 'Google apps' }).click()
//it does the same thing
//})

test('My Second Test Script', async({page})=>{
    console.log('This is my second test')
})

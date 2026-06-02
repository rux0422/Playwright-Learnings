import {test,expect} from "@playwright/test";

test("Handle alert Dialogs",async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on("dialog", dialog =>{
        expect(dialog.type()).toEqual("alert");
        expect(dialog.message()).toEqual("I am a JS Alert");
        dialog.accept(); //handle the alert by accepting it so that it will close
    })

    await page.getByRole('button', { name: 'Click for JS Alert' }).click()
    await expect(page.locator("#result")).toHaveText("You successfully clicked an alert") //provide assertion

})

test("Handle Confirm Dialog", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on("dialog", dialog =>{
        expect(dialog.type()).toEqual("confirm");
        expect(dialog.message()).toEqual("I am a JS Confirm");
        dialog.dismiss(); //handle the alert by dismissing it so that it will close
    })

    await page.getByRole('button', { name: 'Click for JS Confirm' }).click();

})

test("Handle Prompt Dialog", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on("dialog", dialog =>{
        expect(dialog.type()).toEqual("prompt");
        expect(dialog.message()).toEqual("I am a JS prompt");
        expect(dialog.defaultValue()).toEqual("");
        //dialog.accept("abc"); //handle the alert by providing input and accepting itso that it will close
        dialog.dismiss(); //handle the alert by dismissing it so that it will close
    })

    await page.getByRole('button', { name: 'Click for JS Prompt' }).click();

    
})
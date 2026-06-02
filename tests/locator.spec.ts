import { test } from '@playwright/test'




test("My Locator Test", async ({page}) => {
    await page.goto("https://www.saucedemo.com/")
    await page.locator("//*[@placeholder='Username']").fill("standard_user") //XPath locator
    await page.locator("#password").fill("secret_sauce") //CSS Locator using #idValue syntax
    await page.locator(".submit-button").click() //CSS locator using .classValue syntax
    //await page.locator("[value=Login]").click() //CSS locator using [attributeName=attributeValue] syntax
    await page.locator("text='Sauce Labs Backpack'").click() //Text locator using text='textValue' (case-sensitive) syntax
    await page.locator("text=Add to cart").click() //Text locator using textValue syntax (case-insensitive) syntax
})

test("My Locator Test with Options",async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await page.locator(".form_group",{has:page.locator("#user-name")}).click()
    await page.locator(".form_group",{has:page.locator("#user-name")}).pressSequentially("standard_user")
    await page.locator(".form_group",{hasNot:page.locator("#user-name")}).click()
    await page.locator(".form_group",{hasNot:page.locator("#user-name")}).pressSequentially("secret_sauce")
    await page.locator("#login-button").click()
    await page.waitForTimeout(1000) 
    await page.locator(".inventory_item_name",{hasText:"Sauce Labs Fleece Jacket"}).click()
    await page.locator("#back-to-products").click()
    await page.locator(".inventory_item_name",{hasNotText:"Sauce"}).click()
})

test("Locating elements using getBy methods",async({page})=>{
    await page.goto("https://demo.nopcommerce.com/login")
    await page.getByLabel("Email:").fill("ruxstudent@gmail.com")
    //(or) await page.getByLabel("Email").fill("ruxstudent@gmail.com") this is also acceptable
    await page.getByPlaceholder("Search store").fill("Walmart")
    //console.log(await page.getByText("Welcome, Please Sign In!").textContent())
    await page.getByText("Jewelry").click()
    await page.getByAltText("nopCommerce demo store").click()
    await page.getByTitle("Show products in category Apparel").first().click()
    await page.getByRole("button", {name:"Books"}).click()
    await page.goto("https://www.saucedemo.com/")
    await page.getByTestId("username").pressSequentially("rux0422")
})

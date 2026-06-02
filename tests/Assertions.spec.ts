import {expect, test} from '@playwright/test'

test('Assertions', async ({page}) => {
    await page.goto("https://www.saucedemo.com/")
    //Commonly used auto-retrying assertions
    await expect(page.locator("#login-button")).toHaveCount(1)
    await expect(page.locator("#login-button")).toBeEnabled()
    //await expect(page.locator("#login-button"), "Login button is enabled").toBeDisabled()// Demonstrating custom error message
    await expect(page.locator("#login-button")).toBeVisible()
    //await expect(page.locator("#login-button")).toBeHidden()
    await expect.soft(page.locator("#login-button")).toBeHidden() //demonstrating soft assertion
    await expect(page.locator("#login-button")).toHaveText("Login")
    await expect(page.locator("#login-button")).toHaveAttribute("name", "login-button")
    await expect(page.locator("#login-button")).toHaveId("login-button")
    await expect(page.locator("#login-button")).toHaveClass("submit-button btn_action")
    await expect(page).toHaveURL("https://www.saucedemo.com/")
    await expect(page).toHaveTitle("Swag Labs")
    
     
    //Commonly used Non-retrying assertions
    //expect(5).toBe(5)
    //expect(5).toBe(3)
    //expect(4).toBeLessThan(5)
    //expect(5).toBeLessThan(4)

    //Negative matching
     await page.goto("https://www.saucedemo.com/")
     await expect(page).not.toHaveTitle("Instagram")
     await expect(page, "Page title should be Swag Labs").not.toHaveTitle("Swag Labs")


}) 

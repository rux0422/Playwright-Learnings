import {test} from '@playwright/test';

test("Login Test using Click method", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");

    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");

    // Click the login button
    await page.locator("#login-button").click();
})

test("Double Click Test", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");

    // Double click on an element
    await page.getByRole('button', { name: 'Add Element' }).dblclick()
});

test("Right Click Test", async ({ page }) => {
    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html")
    await page.getByText('right click me', { exact: true }).click({ button: 'right' })
    await page.getByRole('heading', { name: 'Example code: Simple Context' }).click({button:'right'})
})

test("DispatchEvent Click Test", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");

    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");

    // Dispatch click event on login button
    await page.locator("#login-button").dispatchEvent("click");
});

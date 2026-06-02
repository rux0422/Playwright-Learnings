import { test, expect } from "@playwright/test" //1. import the test and expect components from the playwright test module
import { LoginPage } from "../pages/LoginPage" //2. import the login page class from the pages folder to create an object of it and use its methods in this test file
import { HomePage } from "../pages/HomePage" //6. import the home page class from the pages folder to create an object of it and use its methods in this test file
import { CartPage } from "../pages/CartPage"; //13. import the cart page class from the pages folder to create an object of it and use its methods in this test file

test("Verification of Cart", async ({ page }) => {
        const loginPageObj = new LoginPage(page); //3. create an object of the login page class and pass the page object to its constructor to initialize the variables in the login page class
        await loginPageObj.openApplication(); //4. call the open application method of the login page class to navigate to the application URL (accessing methods of the LoginPage class using the loginPageObj object)
        await loginPageObj.login("standard_user", "secret_sauce"); //5. call the login method of the login page class to perform the login action by providing the username and password as arguments (accessing methods of the LoginPage class using the loginPageObj object)
        const homePageObj = new HomePage(page); //7. create an object of the home page class and pass the page object to its constructor to initialize the variables in the home page class
        await expect(homePageObj.homePageHeading).toHaveText("Swag Labs"); //8. provide an assertion to verify that we have navigated to the home page after login by checking the text of the home page heading
        await homePageObj.backPackAddToCart(); //9. call the backPackAddToCart method of the home page class to add the backpack item to the cart by clicking on the add to cart button (accessing methods of the HomePage class using the homePageObj object)
        await expect(homePageObj.cartIcon).toHaveText("1"); //10. provide an assertion to verify that the item has been added to the cart by checking the text of the cart icon which should have the number of items added to the cart as its text
        await expect(homePageObj.backpackRemoveButton).toBeVisible(); //11. provide an assertion to verify that the remove button for the backpack item is visible after adding the item to the cart by checking the visibility of the remove button locator
        await homePageObj.gotoCart(); //12. call the gotoCart method of the home page class to navigate
        const cartPageObj = new CartPage(page); //13.create an object of the cart page class and pass the page object to its constructor to initialize the variables in the cart page class
        await expect(cartPageObj.backpackItemLink).toHaveText("Sauce Labs Backpack"); //14. provide an assertion to verify that the correct item has been added to the cart by checking the text of the backpack item link in the cart page which should be the name of the item added to the cart

})
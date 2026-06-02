import { Locator, Page } from "@playwright/test" //1. import the page and locator components from the playwright test module to define the page and locators for the cart page

export class CartPage { //2. create a class with a constructor and define the locators and page as readonly variables (variables that cannot be changed) and export it

    readonly page: Page; //page variable to hold the page object that is passed as an argument to the constructor and used to initialize the locators
    readonly backpackItemLink: Locator; //locator for the backpack item link in the cart page to provide assertion in the test file to verify that the correct item has been added to the cart by checking the text of the backpack item link


    constructor(page: Page) { //3. initialize the variables in the constructor and assign the locators to the respective variables using the page object that is passed as an argument to the constructor
        this.page = page;
        this.backpackItemLink = page.getByRole('link', { name: 'Sauce Labs Backpack' })
    }


}
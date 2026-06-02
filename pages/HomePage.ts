
import {Locator, Page} from "@playwright/test" //1. import the page and locator components

export class HomePage{ //2. create a class with a constructor and define the locators and page as readonly variables (variables that cannot be changed) and export it


    readonly page : Page; //page variable to hold the page object that is passed as an argument to the constructor and used to initialize the locators
    readonly homePageHeading : Locator; //home page heading locator to provide assertion in the test file to verify that we have navigated to the home page after login
    readonly backPackAddToCartButton : Locator; //Add to cart button for the backpack item
    readonly backpackRemoveButton : Locator; //Remove button for the backpack item that will be visible after adding the item to the cart
    readonly cartIcon : Locator; //cart icon that will have the number of items added to the cart as its text and will be used to navigate to the cart page

    constructor(page : Page){ //3. initialize the variables in the constructor and assign the locators to the respective variables using the page object that is passed as an argument to the constructor
        this.page = page;
        this.homePageHeading = page.getByText('Swag Labs');
        this.backPackAddToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        this.backpackRemoveButton = page.locator('[data-test="remove-sauce-labs-backpack"]')
        this.cartIcon = page.locator("id=shopping_cart_container")
    }

    async backPackAddToCart(){  //5. create an asynchronous method to add the backpack item to the cart by clicking on the add to cart button
        await this.backPackAddToCartButton.click();
    }

    async gotoCart(){ //6. create an asynchronous method to navigate to the cart page by clicking on the cart icon after adding the item to the cart
        await this.cartIcon.click();
    }


}
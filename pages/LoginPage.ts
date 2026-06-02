import {Locator, Page} from "@playwright/test" //1. import the page and locator components

export class LoginPage{ //2. create a class with a constructor and define the locators and page as readonly variables (variables that cannot be changed) and export it

    readonly page : Page; //page variable to hold the page object that is passed as an argument to the constructor and used to initialize the locators
    readonly usernameTextBox : Locator; //username field
    readonly passwordTextBox : Locator; //password field
    readonly loginButton : Locator; //login button

    constructor(page : Page){ //3. initialize the variables in the constructor and assign the locators to the respective variables using the page object that is passed as an argument to the constructor
        this.page = page; 
        this.usernameTextBox = page.locator("id=user-name");
        this.passwordTextBox = page.locator("id=password");
        this.loginButton = page.locator("id=login-button");

    }

    async openApplication(){ //5. create an asynchronous method to open the application by navigating to the URL
        await this.page.goto("https://www.saucedemo.com/"); 
    }

    async login(usernameVal : string , passwordVal : string){ //4. create an asynchronous method to perform the login action by filling the username and password and clicking the login button
        await this.usernameTextBox.fill(usernameVal);
        await this.passwordTextBox.fill(passwordVal);
        await this.loginButton.click();
    }
    


}
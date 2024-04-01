const { test, expect } = require('@playwright/test');
const config = require('../environment_config/config.json');

const usernameLocator = config.env.locators.username_textbox;
const passwordLocator = config.env.locators.password_textbox;
const continueBtn = config.env.locators.continueBtn;

exports.LoginPage = class LoginPage {
    
    /**
    * @param {import('@playwright/test').Page} page
    */

    constructor(page) {
        this.page = page;
    }

    async navigateToLoginPage(url) {
        await this.page.goto(url);
    }

    async loginToPage(username) {
        await this.page.getByLabel(usernameLocator).fill(username);
        // await this.page.getByLabel(password_textbox).fill(password);
        await this.page.getByRole('button', { name: continueBtn }).click();
    }
}
const { test, expect } = require('@playwright/test');
const { LoginPage  } = require('../../pages/loginPage');
const config = require('../../environment_config/config.json');

const url = config.url;
const username = config.env.credentials.username;
const password = config.env.credentials.password;


test('Login Test', async({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage(url);
    await loginPage.loginToPage(username);

})
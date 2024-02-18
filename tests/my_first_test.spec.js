const {test, expect} = require('@playwright/test')
const {hello, hello_RR} = require('./demo/demo.js')

test('My First Test', async ({page}) => {
    await page.goto("https://www.google.com")
    await expect(page).toHaveTitle('Google')
})

console.log(hello());
console.log(hello_RR());
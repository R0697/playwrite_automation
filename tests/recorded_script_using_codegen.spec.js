import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.goto('https://www.facebook.com/login');
  await page.getByPlaceholder('Email address or phone number').click();
  await page.getByPlaceholder('Email address or phone number').fill('rahul.ranpura');
  await page.locator('div:nth-child(12) > div > div').click();
  await page.getByPlaceholder('Password').fill('google.com');
  await page.getByPlaceholder('Password').press('Enter');
});
import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['Pixel 7'],
});

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('textbox', { name: 'Google Search' }).click();
  await page.getByRole('textbox', { name: 'Google Search' }).fill('youtube');
  await page.getByRole('textbox', { name: 'Google Search'}).press('Enter');
  await page.getByRole('link', { name: 'YouTube' }).getByRole('link').click();
  await page.getByRole('button', { name: 'Search YouTube' }).click();
  await page.getByPlaceholder('Search YouTube').fill('new songs');
  await page.getByPlaceholder('Search YouTube').press('Enter');
  await page.getByRole('link', { name: 'Akhiyaan Gulaab (Song):' }).click();
});
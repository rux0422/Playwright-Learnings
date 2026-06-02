// spec: specs/sauce-demo-login-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Positive Test Cases - Successful Login', () => {
  test('Standard User Login (Happy Path)', async ({ page }) => {
    // 1. Navigate to https://www.saucedemo.com/
    await page.goto('https://www.saucedemo.com/');
    expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(page.getByTestId('username')).toBeVisible();
    await expect(page.getByTestId('password')).toBeVisible();
    await expect(page.getByTestId('login-button')).toBeVisible();

    // 2. Enter 'standard_user' in the username field
    await page.getByTestId('username').fill('standard_user');
    await expect(page.getByTestId('username')).toHaveValue('standard_user');

    // 3. Enter 'secret_sauce' in the password field
    await page.getByTestId('password').fill('secret_sauce');
    await expect(page.getByTestId('password')).toHaveValue('secret_sauce');
    await expect(page.getByTestId('username')).toHaveValue('standard_user');

    // 4. Click the Login button
    await page.getByTestId('login-button').click();

    // 5. Verify redirect to inventory page and products are displayed
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    // Verify products are displayed by checking for product links
    await expect(page.locator('a:has-text("Sauce Labs Backpack")')).toBeVisible();
    // Verify at least one product is on the page
    const productCount = await page.locator('[data-test="inventory-item"], div.inventory_item').count();
    expect(productCount).toBeGreaterThan(0);
  });
});

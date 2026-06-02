// spec: specs/sauce-demo-login-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Positive Test Cases - Successful Login', () => {
  test('Locked Out User Login', async ({ page }) => {
    // 1. Navigate to https://www.saucedemo.com/
    await page.goto('https://www.saucedemo.com/');
    await expect(page.getByTestId('username')).toBeVisible();
    await expect(page.getByTestId('password')).toBeVisible();

    // 2. Enter 'locked_out_user' in the username field
    await page.getByTestId('username').fill('locked_out_user');
    await expect(page.getByTestId('username')).toHaveValue('locked_out_user');

    // 3. Enter 'secret_sauce' in the password field
    await page.getByTestId('password').fill('secret_sauce');
    await expect(page.getByTestId('password')).toHaveValue('secret_sauce');

    // 4. Click the Login button
    await page.getByTestId('login-button').click();

    // 5. Verify error message displays and user remains on login page
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(page.locator('h3:has-text("Epic sadface: Sorry, this user has been locked out.")')).toBeVisible();

    // 6. Verify error message has a close button
    // Look for button within the error message container
    const errorMessage = page.locator('h3:has-text("Epic sadface: Sorry, this user has been locked out.")');
    const closeButton = errorMessage.locator('button').first();
    await expect(closeButton).toBeVisible();
  });
});

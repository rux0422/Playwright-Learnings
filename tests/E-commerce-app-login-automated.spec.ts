import { test, expect } from '@playwright/test';

test.describe('E-Commerce App Login', () => {
  test('should login successfully with valid credentials', async ({ page }) => {
    // Navigate to WishInfinite website
    await page.goto('https://www.wishinfinite.com', { waitUntil: 'domcontentloaded' });
    
    // Click on Playground navigation link
    await page.click('a[href="/playground"]');
    await page.waitForURL(/.*playground/, { timeout: 15000 });
    
    // Wait for E-Commerce App button and click it
    await page.waitForSelector('button:has-text("E-Commerce App")', { timeout: 10000 });
    await page.click('button:has-text("E-Commerce App")');
    
    // Wait for the login form to be visible
    await page.waitForSelector('input[placeholder="Enter username"]', { timeout: 10000 });
    
    // Fill in the username
    await page.fill('input[placeholder="Enter username"]', 'WishInfinite');
    
    // Fill in the password
    await page.fill('input[placeholder="Enter password"]', 'WishInfinite@01');
    
    // Click the Login button
    await page.click('button:has-text("Login")');
    
    // Wait for successful login - check for welcome message
    await page.waitForSelector('text=Welcome, WishInfinite!', { timeout: 15000 });
    
    // Verify the logout button is visible (confirms successful login)
    const logoutButton = page.locator('button:has-text("Logout")');
    await expect(logoutButton).toBeVisible();
    
    // Verify welcome message
    const welcomeMessage = page.locator('text=Welcome, WishInfinite!');
    await expect(welcomeMessage).toBeVisible();
    
    // Verify tabs are visible after login
    const viewItemsTab = page.locator('button[role="tab"]:has-text("View Items")');
    const viewOrdersTab = page.locator('button[role="tab"]:has-text("View Orders")');
    await expect(viewItemsTab).toBeVisible();
    await expect(viewOrdersTab).toBeVisible();
    
    console.log('✅ Login successful! User is authenticated.');
    console.log('✅ All assertions passed!');
  });
});

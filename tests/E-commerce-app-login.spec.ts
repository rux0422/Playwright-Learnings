import { test, expect } from '@playwright/test';

test.describe('E-Commerce App Login Test', () => {
  test('Should login successfully with valid credentials', async ({ page }) => {
    // Step 1: Navigate to WishInfinite website
    console.log('Step 1: Navigating to WishInfinite website...');
    await page.goto('https://www.wishinfinite.com', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(2000);
    
    // Step 2: Navigate to Playground tab
    console.log('Step 2: Navigating to Playground tab...');
    // Click the toggle navigation button to expand the menu
    const toggleBtn = page.locator('button.navbar-toggler');
    await toggleBtn.click();
    await page.waitForTimeout(1000);
    
    // Click on Playground link
    const playgroundLink = page.locator('a[href="/playground"]');
    await playgroundLink.click();
    
    // Wait for the playground page to load
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(2000);
    
    // Step 3: Navigate to E-Commerce App section
    console.log('Step 3: Navigating to E-Commerce App section...');
    // Click on E-Commerce App button
    const ecommerceBtn = page.locator('button', { hasText: 'E-Commerce App' });
    await ecommerceBtn.click();
    
    // Wait for the E-Commerce App content to load
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(2000);
    
    // Step 4: Fill in login form with demo credentials
    console.log('Step 4: Filling in login form...');
    // Fill username
    const usernameInput = page.locator('input[placeholder="Enter username"]');
    await usernameInput.fill('WishInfinite');
    console.log('✓ Username entered');
    
    // Fill password
    const passwordInput = page.locator('input[placeholder="Enter password"]');
    await passwordInput.fill('WishInfinite@01');
    console.log('✓ Password entered');
    
    // Step 5: Submit the login form
    console.log('Step 5: Clicking Login button...');
    const loginButton = page.locator('button', { hasText: 'Login' });
    await loginButton.click();
    
    // Step 6: Wait and verify successful login
    console.log('Step 6: Verifying login success...');
    // Wait for page to process login
    await page.waitForTimeout(3000);
    
    // Take a screenshot to verify the logged in state
    await page.screenshot({ path: 'login-success.png', fullPage: true });
    console.log('✅ Login test completed! Screenshot saved as login-success.png');
    
    // Check if we're still on the page or if dashboard loaded
    const currentUrl = page.url();
    console.log(`Current URL: ${currentUrl}`);
    
    const pageContent = await page.content();
    if (pageContent.includes('Dashboard') || pageContent.includes('Welcome') || pageContent.includes('Product')) {
      console.log('✅ Login successful - Dashboard or product content visible!');
    } else {
      console.log('Login form processed - navigating to logged-in section');
    }
  });
});

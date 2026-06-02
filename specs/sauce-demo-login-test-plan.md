# Sauce Demo Login Functionality - Comprehensive Test Plan

## Application Overview

The Sauce Demo application (https://www.saucedemo.com/) is a test e-commerce web application designed for testing automation frameworks. This test plan covers comprehensive testing of the login functionality, including positive test cases (successful logins with various user types), negative test cases (invalid credentials), validation scenarios (empty fields), UI/UX verification, security testing, and edge cases. The application accepts six different user types (standard_user, locked_out_user, problem_user, performance_glitch_user, error_user, visual_user) all with the password "secret_sauce".

## Test Scenarios

### 1. Positive Test Cases - Successful Login

**Seed:** `tests/seed.spec.ts`

#### 1.1. Login with standard_user credentials

**File:** `tests/sauce-demo-login/positive-standard-user.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
    - expect: Page loads successfully
    - expect: Login page is displayed with username and password fields
    - expect: Login button is visible
  2. Enter 'standard_user' in the username field
    - expect: Username is entered correctly in the field
  3. Enter 'secret_sauce' in the password field
    - expect: Password is entered in the field (characters masked with dots)
    - expect: Username field still contains 'standard_user'
  4. Click the Login button
    - expect: Page redirects to https://www.saucedemo.com/inventory.html
    - expect: Inventory page loads successfully
    - expect: Products are displayed
    - expect: User is successfully logged in

#### 1.2. Login with locked_out_user credentials

**File:** `tests/sauce-demo-login/positive-locked-out-user.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
    - expect: Login page is displayed
  2. Enter 'locked_out_user' in the username field
    - expect: Username is entered correctly
  3. Enter 'secret_sauce' in the password field
    - expect: Password field is populated
    - expect: Characters are masked
  4. Click the Login button
    - expect: Error message displays: 'Epic sadface: Sorry, this user has been locked out.'
    - expect: User remains on the login page (URL is still https://www.saucedemo.com/)
    - expect: Error message has a close button (X icon)
    - expect: Username and password fields contain red X icons

#### 1.3. Login with problem_user credentials

**File:** `tests/sauce-demo-login/positive-problem-user.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
    - expect: Login page is displayed
  2. Enter 'problem_user' in the username field
    - expect: Username is entered correctly
  3. Enter 'secret_sauce' in the password field
    - expect: Password is entered (masked)
  4. Click the Login button
    - expect: Page redirects to https://www.saucedemo.com/inventory.html
    - expect: Inventory page loads
    - expect: User is logged in successfully

#### 1.4. Login with performance_glitch_user credentials

**File:** `tests/sauce-demo-login/positive-performance-glitch-user.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
    - expect: Login page is displayed
  2. Enter 'performance_glitch_user' in the username field
    - expect: Username is entered correctly
  3. Enter 'secret_sauce' in the password field
    - expect: Password is entered (masked)
  4. Click the Login button
    - expect: Page redirects to inventory.html (may take longer than other users)
    - expect: Inventory page loads
    - expect: User is logged in successfully

#### 1.5. Login with error_user credentials

**File:** `tests/sauce-demo-login/positive-error-user.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
    - expect: Login page is displayed
  2. Enter 'error_user' in the username field
    - expect: Username is entered correctly
  3. Enter 'secret_sauce' in the password field
    - expect: Password is entered (masked)
  4. Click the Login button
    - expect: Page redirects to inventory.html
    - expect: Inventory page loads
    - expect: User is logged in successfully

#### 1.6. Login with visual_user credentials

**File:** `tests/sauce-demo-login/positive-visual-user.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
    - expect: Login page is displayed
  2. Enter 'visual_user' in the username field
    - expect: Username is entered correctly
  3. Enter 'secret_sauce' in the password field
    - expect: Password is entered (masked)
  4. Click the Login button
    - expect: Page redirects to inventory.html
    - expect: Inventory page loads
    - expect: User is logged in successfully

### 2. Negative Test Cases - Invalid Credentials

**Seed:** `tests/seed.spec.ts`

#### 2.1. Login with invalid username and invalid password

**File:** `tests/sauce-demo-login/negative-invalid-both.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
    - expect: Login page is displayed
  2. Enter 'invalid_user' in the username field
    - expect: Username is entered
  3. Enter 'invalid_password' in the password field
    - expect: Password is entered (masked)
  4. Click the Login button
    - expect: User remains on login page (URL: https://www.saucedemo.com/)
    - expect: Error message displays: 'Epic sadface: Username and password do not match any user in this service'
    - expect: Error message has a close button
    - expect: Username and password fields show red X icons
    - expect: Error message is prominent and visible

#### 2.2. Login with valid username and invalid password

**File:** `tests/sauce-demo-login/negative-invalid-password.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
    - expect: Login page is displayed
  2. Enter 'standard_user' in the username field
    - expect: Username is entered
  3. Enter 'wrong_password' in the password field
    - expect: Password is entered (masked)
  4. Click the Login button
    - expect: User remains on login page
    - expect: Error message displays: 'Epic sadface: Username and password do not match any user in this service'
    - expect: Username field still shows 'standard_user'
    - expect: Password field is cleared or shows entered text
    - expect: Red X icons appear next to both fields

#### 2.3. Login with invalid username and valid password

**File:** `tests/sauce-demo-login/negative-invalid-username.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
    - expect: Login page is displayed
  2. Enter 'nonexistent_user' in the username field
    - expect: Username is entered
  3. Enter 'secret_sauce' in the password field
    - expect: Password is entered (masked)
  4. Click the Login button
    - expect: User remains on login page
    - expect: Error message displays: 'Epic sadface: Username and password do not match any user in this service'
    - expect: Red X icons appear on both fields

### 3. Validation Test Cases - Empty Fields

**Seed:** `tests/seed.spec.ts`

#### 3.1. Login with empty username field

**File:** `tests/sauce-demo-login/validation-empty-username.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
    - expect: Login page is displayed
  2. Leave username field empty
    - expect: Username field is empty
  3. Enter 'secret_sauce' in the password field
    - expect: Password is populated
  4. Click the Login button
    - expect: User remains on login page
    - expect: Error message displays: 'Epic sadface: Username is required'
    - expect: Red X icon appears next to the username field
    - expect: Red X icon appears next to the password field

#### 3.2. Login with empty password field

**File:** `tests/sauce-demo-login/validation-empty-password.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
    - expect: Login page is displayed
  2. Enter 'standard_user' in the username field
    - expect: Username is entered
  3. Leave password field empty
    - expect: Password field is empty
  4. Click the Login button
    - expect: User remains on login page
    - expect: Error message displays: 'Epic sadface: Password is required'
    - expect: Red X icons appear next to both fields

#### 3.3. Login with both username and password fields empty

**File:** `tests/sauce-demo-login/validation-empty-both.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
    - expect: Login page is displayed
  2. Leave both username and password fields empty
    - expect: Both fields are empty
  3. Click the Login button
    - expect: User remains on login page
    - expect: Error message is displayed (either 'Username is required' or 'Password is required')
    - expect: Red X icons appear next to both fields

### 4. UI/UX Test Cases - Visual Elements and Behavior

**Seed:** `tests/seed.spec.ts`

#### 4.1. Verify all login page elements are visible and properly positioned

**File:** `tests/sauce-demo-login/ui-page-elements.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
    - expect: Swag Labs logo/title is visible at the top of the page
    - expect: Username label and textbox are visible
    - expect: Password label and textbox are visible
    - expect: Login button is visible and clickable
    - expect: Information box with 'Accepted usernames are:' is visible
    - expect: All 6 valid usernames are listed (standard_user, locked_out_user, problem_user, performance_glitch_user, error_user, visual_user)
    - expect: Information box with 'Password for all users:' is visible
    - expect: Password 'secret_sauce' is displayed

#### 4.2. Verify error message displays correctly with close button

**File:** `tests/sauce-demo-login/ui-error-message-display.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
    - expect: Login page is displayed
  2. Enter 'invalid_user' and 'invalid_password'
    - expect: Credentials are entered
  3. Click Login button
    - expect: Error message appears at the top of the form
    - expect: Error message text is readable and clear
    - expect: Error message has a close button (X icon) on the right side
    - expect: Error message background color is visually distinct
    - expect: Text in error message is properly formatted
  4. Click the close button on the error message
    - expect: Error message is removed from the page
    - expect: Login form is still visible
    - expect: Username and password fields retain entered values
    - expect: Red X icons are removed

#### 4.3. Verify password field is properly masked

**File:** `tests/sauce-demo-login/ui-password-masking.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
    - expect: Login page is displayed
  2. Click on the password field
    - expect: Password field is focused
  3. Type 'secret_sauce' character by character slowly
    - expect: Each character appears as a masked dot or bullet point
    - expect: The number of dots matches the number of characters typed
    - expect: Password is not displayed in plain text
    - expect: Username field remains unmasked and shows 'standard_user' if entered

#### 4.4. Verify login button is enabled and responsive

**File:** `tests/sauce-demo-login/ui-login-button.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
    - expect: Login page is displayed
    - expect: Login button is visible
  2. Verify Login button state when form is empty
    - expect: Login button is enabled (not greyed out)
    - expect: Login button has pointer cursor on hover
  3. Enter credentials 'standard_user' and 'secret_sauce'
    - expect: Login button remains enabled
  4. Hover over the Login button
    - expect: Login button shows visual feedback (e.g., color change or background change)
  5. Click the Login button
    - expect: Button click is registered
    - expect: Page navigates to inventory page

#### 4.5. Verify page redirect after successful login

**File:** `tests/sauce-demo-login/ui-successful-redirect.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
    - expect: Login page displays (URL is https://www.saucedemo.com/)
  2. Enter 'standard_user' and 'secret_sauce'
    - expect: Credentials are entered
  3. Click Login button
    - expect: Page redirects to https://www.saucedemo.com/inventory.html
    - expect: URL changes in the address bar
    - expect: Inventory page loads with products displayed
    - expect: Login page is no longer visible

#### 4.6. Verify user remains on login page after failed login

**File:** `tests/sauce-demo-login/ui-failed-login-page-retention.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
    - expect: Login page is displayed
  2. Enter 'invalid_user' and 'invalid_password'
    - expect: Credentials are entered
  3. Click Login button
    - expect: URL remains https://www.saucedemo.com/
    - expect: User is still on the login page
    - expect: Login form is still visible
    - expect: Error message is displayed
    - expect: Username and password fields are visible with entered values

### 5. Edge Cases and Special Input Testing

**Seed:** `tests/seed.spec.ts`

#### 5.1. Login with special characters in username field

**File:** `tests/sauce-demo-login/edge-special-characters-username.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
    - expect: Login page is displayed
  2. Enter 'standard_user!@#$%^&*()' in the username field
    - expect: Special characters are accepted and displayed in the field
  3. Enter 'secret_sauce' in the password field
    - expect: Password is entered (masked)
  4. Click the Login button
    - expect: User remains on login page
    - expect: Error message displays: 'Epic sadface: Username and password do not match any user in this service'

#### 5.2. Login with special characters in password field

**File:** `tests/sauce-demo-login/edge-special-characters-password.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
    - expect: Login page is displayed
  2. Enter 'standard_user' in the username field
    - expect: Username is entered
  3. Enter 'secret_sauce!@#$%^&*()' in the password field
    - expect: Characters are masked (not visible in plain text)
  4. Click the Login button
    - expect: User remains on login page
    - expect: Error message is displayed indicating credentials do not match

#### 5.3. Login with very long username string

**File:** `tests/sauce-demo-login/edge-long-username.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
    - expect: Login page is displayed
  2. Enter a very long string (100+ characters) in the username field
    - expect: Field accepts the long string
    - expect: Long text is entered in the field
  3. Enter 'secret_sauce' in the password field
    - expect: Password is entered
  4. Click the Login button
    - expect: User remains on login page
    - expect: Error message displays indicating credentials do not match
    - expect: No application crash or error

#### 5.4. Login with very long password string

**File:** `tests/sauce-demo-login/edge-long-password.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
    - expect: Login page is displayed
  2. Enter 'standard_user' in the username field
    - expect: Username is entered
  3. Enter a very long string (100+ characters) in the password field
    - expect: Field accepts the long string
    - expect: All characters are masked
  4. Click the Login button
    - expect: User remains on login page
    - expect: Error message is displayed
    - expect: No application crash

#### 5.5. Login with SQL injection attempt in username

**File:** `tests/sauce-demo-login/edge-sql-injection-username.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
    - expect: Login page is displayed
  2. Enter SQL injection string in username (e.g., \"' OR '1'='1) in the username field
    - expect: SQL injection string is accepted by the field
  3. Enter 'secret_sauce' in the password field
    - expect: Password is entered
  4. Click the Login button
    - expect: User remains on login page
    - expect: Error message displays indicating credentials do not match (not exploited)
    - expect: Application does not bypass authentication
    - expect: No unauthorized access is granted

#### 5.6. Login with SQL injection attempt in password

**File:** `tests/sauce-demo-login/edge-sql-injection-password.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
    - expect: Login page is displayed
  2. Enter 'standard_user' in the username field
    - expect: Username is entered
  3. Enter SQL injection string in password (e.g., \"' OR '1'='1) in the password field
    - expect: SQL injection attempt is entered (masked)
  4. Click the Login button
    - expect: User remains on login page
    - expect: Error message indicates credentials do not match
    - expect: Application successfully prevents SQL injection

#### 5.7. Login with spaces in username

**File:** `tests/sauce-demo-login/edge-spaces-in-username.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
    - expect: Login page is displayed
  2. Enter 'standard_user ' (with trailing space) in the username field
    - expect: Username with space is entered
  3. Enter 'secret_sauce' in the password field
    - expect: Password is entered
  4. Click the Login button
    - expect: User remains on login page (login fails because 'standard_user ' does not match 'standard_user')
    - expect: Error message indicates credentials do not match

#### 5.8. Login with spaces in password

**File:** `tests/sauce-demo-login/edge-spaces-in-password.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
    - expect: Login page is displayed
  2. Enter 'standard_user' in the username field
    - expect: Username is entered
  3. Enter 'secret_sauce ' (with trailing space) in the password field
    - expect: Password with space is entered (masked)
  4. Click the Login button
    - expect: User remains on login page (login fails because 'secret_sauce ' does not match 'secret_sauce')
    - expect: Error message indicates credentials do not match

#### 5.9. Test case sensitivity - uppercase username

**File:** `tests/sauce-demo-login/edge-case-sensitivity-username.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
    - expect: Login page is displayed
  2. Enter 'STANDARD_USER' (all uppercase) in the username field
    - expect: Username is entered in uppercase
  3. Enter 'secret_sauce' in the password field
    - expect: Password is entered
  4. Click the Login button
    - expect: User remains on login page (login fails if case-sensitive)
    - expect: Error message indicates credentials do not match
    - expect: Note: This verifies case-sensitivity handling

#### 5.10. Test case sensitivity - uppercase password

**File:** `tests/sauce-demo-login/edge-case-sensitivity-password.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
    - expect: Login page is displayed
  2. Enter 'standard_user' in the username field
    - expect: Username is entered
  3. Enter 'SECRET_SAUCE' (all uppercase) in the password field
    - expect: Password is entered (masked)
  4. Click the Login button
    - expect: User remains on login page (login fails if case-sensitive)
    - expect: Error message indicates credentials do not match

### 6. Security Test Cases

**Seed:** `tests/seed.spec.ts`

#### 6.1. Verify session validation after successful login

**File:** `tests/sauce-demo-login/security-session-validation.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
    - expect: Login page is displayed
  2. Enter 'standard_user' and 'secret_sauce'
    - expect: Credentials are entered
  3. Click Login button
    - expect: User is logged in and redirected to inventory page
  4. Verify that a session is created (check for session cookies/tokens if possible)
    - expect: Session is established for the logged-in user
    - expect: User authentication state is maintained
  5. Access the inventory page directly
    - expect: User remains logged in
    - expect: Inventory page loads with user's session intact

#### 6.2. Verify logout functionality removes session

**File:** `tests/sauce-demo-login/security-logout-session.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/ and log in with valid credentials
    - expect: User is logged in
    - expect: Inventory page is displayed
  2. Click the menu/hamburger button (usually in top-left or top-right)
    - expect: Navigation menu opens
  3. Click the 'Logout' option
    - expect: User is logged out
    - expect: Page redirects back to login page (https://www.saucedemo.com/)
  4. Try to access inventory page directly via URL (https://www.saucedemo.com/inventory.html)
    - expect: User is redirected to login page
    - expect: Session is cleared
    - expect: Unauthorized access to protected page is prevented

#### 6.3. Verify back button behavior after successful login

**File:** `tests/sauce-demo-login/security-back-button-after-login.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
    - expect: Login page is displayed
  2. Enter 'standard_user' and 'secret_sauce' and click Login
    - expect: User is logged in
    - expect: Inventory page is displayed
  3. Click the browser's back button
    - expect: Application properly handles back navigation
    - expect: User either remains on inventory page (proper session handling) or is not allowed to access the login page while authenticated

#### 6.4. Verify no password is stored in visible form attributes

**File:** `tests/sauce-demo-login/security-no-password-storage.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
    - expect: Login page is displayed
  2. Enter 'standard_user' in username and 'secret_sauce' in password
    - expect: Credentials are entered
  3. Inspect the HTML source code (F12 developer tools) to verify password field type and attributes
    - expect: Password field type is 'password' (not 'text')
    - expect: Password value is not stored in the HTML attributes
    - expect: Password is not visible in plain text in the source code

#### 6.5. Verify no credentials in browser history after logout

**File:** `tests/sauce-demo-login/security-credentials-history.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/ and log in with 'standard_user' and 'secret_sauce'
    - expect: User is logged in
  2. Log out from the application
    - expect: User is logged out
    - expect: Redirect to login page
  3. Check browser history or cache to verify no credentials are stored
    - expect: Credentials are not stored in browser history
    - expect: Credentials are not visible in cached data
    - expect: No sensitive information is exposed

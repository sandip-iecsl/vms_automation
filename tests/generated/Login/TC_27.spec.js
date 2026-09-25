const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_27
 * Module: Login
 * Sub-Module: Authentication
 * Scenario: Enter Key Form Submission
 * Description: Verify pressing Enter key from password field submits the login form.
 */
test('TC_27: Enter Key Form Submission', { annotation: { type: 'description', description: 'Verify pressing Enter key from password field submits the login form.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_29
 * Module: Login
 * Sub-Module: Authentication
 * Scenario: Toast Notification Display
 * Description: Verify toast message on successful login.
 */
test('TC_29: Toast Notification Display', { annotation: { type: 'description', description: 'Verify toast message on successful login.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});

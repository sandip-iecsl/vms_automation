const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_82
 * Module: Login
 * Sub-Module: Change/Reset Password
 * Scenario: Cancel button functionality
 * Description: Verify Cancel operation
 */
test('TC_82: Cancel button functionality', { annotation: { type: 'description', description: 'Verify Cancel operation' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});

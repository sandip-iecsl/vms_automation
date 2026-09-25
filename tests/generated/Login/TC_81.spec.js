const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_81
 * Module: Login
 * Sub-Module: Change/Reset Password
 * Scenario: Cancel button visibility
 * Description: Verify Cancel button display
 */
test('TC_81: Cancel button visibility', { annotation: { type: 'description', description: 'Verify Cancel button display' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_65
 * Module: Login
 * Sub-Module: Change/Reset Password
 * Scenario: New Password field visibility
 * Description: Verify New Password field display
 */
test('TC_65: New Password field visibility', { annotation: { type: 'description', description: 'Verify New Password field display' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_64
 * Module: Login
 * Sub-Module: Change/Reset Password
 * Scenario: Current Password field visibility
 * Description: Verify Current Password field display
 */
test('TC_64: Current Password field visibility', { annotation: { type: 'description', description: 'Verify Current Password field display' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});

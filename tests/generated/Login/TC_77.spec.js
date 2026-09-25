const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_77
 * Module: Login
 * Sub-Module: Change/Reset Password
 * Scenario: Login using new password
 * Description: Verify login using updated password
 */
test('TC_77: Login using new password', { annotation: { type: 'description', description: 'Verify login using updated password' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});

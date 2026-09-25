const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_78
 * Module: Login
 * Sub-Module: Change/Reset Password
 * Scenario: Login using old password
 * Description: Verify old password invalidation
 */
test('TC_78: Login using old password', { annotation: { type: 'description', description: 'Verify old password invalidation' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});

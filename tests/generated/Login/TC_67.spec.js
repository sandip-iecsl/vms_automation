const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_67
 * Module: Login
 * Sub-Module: Change/Reset Password
 * Scenario: Empty New Password validation
 * Description: Verify validation for blank New Password
 */
test('TC_67: Empty New Password validation', { annotation: { type: 'description', description: 'Verify validation for blank New Password' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});

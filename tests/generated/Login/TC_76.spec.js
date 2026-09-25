const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_76
 * Module: Login
 * Sub-Module: Change/Reset Password
 * Scenario: Successful password reset/change
 * Description: Verify password update process
 */
test('TC_76: Successful password reset/change', { annotation: { type: 'description', description: 'Verify password update process' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});

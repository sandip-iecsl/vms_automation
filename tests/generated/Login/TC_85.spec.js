const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_85
 * Module: Login
 * Sub-Module: Change/Reset Password
 * Scenario: Password update response time
 * Description: Verify password update performance
 */
test('TC_85: Password update response time', { annotation: { type: 'description', description: 'Verify password update performance' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});

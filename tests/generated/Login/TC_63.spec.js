const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_63
 * Module: Login
 * Sub-Module: Change/Reset Password
 * Scenario: Password page opening
 * Description: Verify Password Management page accessibility
 */
test('TC_63: Password page opening', { annotation: { type: 'description', description: 'Verify Password Management page accessibility' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});

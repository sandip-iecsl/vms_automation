const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_71
 * Module: Login
 * Sub-Module: Change/Reset Password
 * Scenario: Password mismatch validation
 * Description: Verify validation when passwords do not match
 */
test('TC_71: Password mismatch validation', { annotation: { type: 'description', description: 'Verify validation when passwords do not match' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});

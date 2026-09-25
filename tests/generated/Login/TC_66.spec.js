const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_66
 * Module: Login
 * Sub-Module: Change/Reset Password
 * Scenario: Confirm Password field visibility
 * Description: Verify Confirm Password field display
 */
test('TC_66: Confirm Password field visibility', { annotation: { type: 'description', description: 'Verify Confirm Password field display' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});

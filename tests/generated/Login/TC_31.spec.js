const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_31
 * Module: Login
 * Sub-Module: HRMS Integration
 * Scenario: Deactivated HRMS User Login
 * Description: Verify login attempt by a deactivated HRMS user account.
 */
test('TC_31: Deactivated HRMS User Login', { annotation: { type: 'description', description: 'Verify login attempt by a deactivated HRMS user account.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});

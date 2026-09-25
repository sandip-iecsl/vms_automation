const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_30
 * Module: Login
 * Sub-Module: HRMS Integration
 * Scenario: Valid HRMS User Direct Login
 * Description: Verify HRMS employee can log in directly using HRMS ID and password.
 */
test('TC_30: Valid HRMS User Direct Login', { annotation: { type: 'description', description: 'Verify HRMS employee can log in directly using HRMS ID and password.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});

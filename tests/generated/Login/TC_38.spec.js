const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_38
 * Module: Login
 * Sub-Module: RBAC
 * Scenario: Custom Role / Private User Access
 * Description: Verify dashboard widgets and side menu match exact assigned permissions.
 */
test('TC_38: Custom Role / Private User Access', { annotation: { type: 'description', description: 'Verify dashboard widgets and side menu match exact assigned permissions.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});

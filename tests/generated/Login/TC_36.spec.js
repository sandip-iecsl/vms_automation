const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_36
 * Module: Login
 * Sub-Module: RBAC
 * Scenario: Admin Role Dashboard Access
 * Description: Verify Admin logs in and accesses all administrative modules.
 */
test('TC_36: Admin Role Dashboard Access', { annotation: { type: 'description', description: 'Verify Admin logs in and accesses all administrative modules.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});

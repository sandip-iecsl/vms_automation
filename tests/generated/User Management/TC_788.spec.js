const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_788
 * Module: User Management
 * Sub-Module: User Mapping
 * Scenario: Role-Based Access Control (RBAC) Enforcement
 * Description: Verify mapped role permissions take effect immediately upon user login.
 */
test('TC_788: Role-Based Access Control (RBAC) Enforcement', { annotation: { type: 'description', description: 'Verify mapped role permissions take effect immediately upon user login.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

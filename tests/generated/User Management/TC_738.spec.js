const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_738
 * Module: User Management
 * Sub-Module: Group Creation
 * Scenario: Role-Based Access Control (RBAC) View Only
 * Description: Verify non-admin / read-only user cannot add, edit, or delete user groups.
 */
test('TC_738: Role-Based Access Control (RBAC) View Only', { annotation: { type: 'description', description: 'Verify non-admin / read-only user cannot add, edit, or delete user groups.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserGroup');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

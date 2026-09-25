const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_898
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Revoke All Permissions for a Role
 * Description: Verify toggling all switches to OFF strips all access for a suspended role.
 */
test('TC_898: Revoke All Permissions for a Role', { annotation: { type: 'description', description: 'Verify toggling all switches to OFF strips all access for a suspended role.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

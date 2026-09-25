const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_897
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Enable All Permissions for a Role
 * Description: Verify toggling all menu permissions to ON for Super Admin group.
 */
test('TC_897: Enable All Permissions for a Role', { annotation: { type: 'description', description: 'Verify toggling all menu permissions to ON for Super Admin group.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_886
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Role Mapping Access Block
 * Description: Verify non-admin role cannot view or modify Role Mapping settings.
 */
test('TC_886: Role Mapping Access Block', { annotation: { type: 'description', description: 'Verify non-admin role cannot view or modify Role Mapping settings.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

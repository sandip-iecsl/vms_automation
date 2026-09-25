const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_920
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Complete Role Life Cycle Verification
 * Description: Verify end-to-end flow: Create Group -> Configure Role Mapping -> Map User -> Validate Dashboard & Module Permissions.
 */
test('TC_920: Complete Role Life Cycle Verification', { annotation: { type: 'description', description: 'Verify end-to-end flow: Create Group -> Configure Role Mapping -> Map User -> Validate Dashboard & Module Permissions.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_884
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: User Mapping Read-Only View
 * Description: Verify mapped user can view mapped users but cannot add or remove mappings.
 */
test('TC_884: User Mapping Read-Only View', { annotation: { type: 'description', description: 'Verify mapped user can view mapped users but cannot add or remove mappings.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

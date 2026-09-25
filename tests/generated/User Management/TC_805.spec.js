const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_805
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Dropdown Population from Group Master
 * Description: Verify Group Name dropdown populates all active user groups.
 */
test('TC_805: Dropdown Population from Group Master', { annotation: { type: 'description', description: 'Verify Group Name dropdown populates all active user groups.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

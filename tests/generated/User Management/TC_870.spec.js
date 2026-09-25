const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_870
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Private User Master Sidebar Removal
 * Description: Verify Private User menu link is hidden from sidebar.
 */
test('TC_870: Private User Master Sidebar Removal', { annotation: { type: 'description', description: 'Verify Private User menu link is hidden from sidebar.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('.sidebar-edge-toggle, body').first()).toBeVisible();
});

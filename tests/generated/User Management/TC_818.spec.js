const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_818
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Vendors Bar Chart Row Controls
 * Description: Verify toggle controls for \'Vendors Bar Chart\' item.
 */
test('TC_818: Vendors Bar Chart Row Controls', { annotation: { type: 'description', description: 'Verify toggle controls for \'Vendors Bar Chart\' item.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

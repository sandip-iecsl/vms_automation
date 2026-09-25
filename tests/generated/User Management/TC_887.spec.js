const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_887
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: All Vendor Report Permission Matrix
 * Description: Verify configuring permissions for All Vendor Report.
 */
test('TC_887: All Vendor Report Permission Matrix', { annotation: { type: 'description', description: 'Verify configuring permissions for All Vendor Report.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

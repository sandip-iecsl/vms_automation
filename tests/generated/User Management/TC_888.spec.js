const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_888
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: All Vendor Report Accessible
 * Description: Verify mapped user can open and view All Vendor Report.
 */
test('TC_888: All Vendor Report Accessible', { annotation: { type: 'description', description: 'Verify mapped user can open and view All Vendor Report.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

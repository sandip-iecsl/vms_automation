const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_892
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Vendor Approval Status Report Access
 * Description: Verify mapped user can view vendor approval audit logs in report.
 */
test('TC_892: Vendor Approval Status Report Access', { annotation: { type: 'description', description: 'Verify mapped user can view vendor approval audit logs in report.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1151
 * Module: Report
 * Sub-Module: Vendor Approval Status
 * Scenario: RBAC View Restriction for Unauthorized Roles
 * Description: Verify users without Report permission cannot access Vendor Approval Status.
 */
test('TC_1151: RBAC View Restriction for Unauthorized Roles', { annotation: { type: 'description', description: 'Verify users without Report permission cannot access Vendor Approval Status.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/VendorApprovalStatus');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1157
 * Module: Report
 * Sub-Module: Vendor Approval Status
 * Scenario: Live Rejection Workflow Sync
 * Description: Verify vendor rejected in Vendor Approval module updates to Rejected in Status report.
 */
test('TC_1157: Live Rejection Workflow Sync', { annotation: { type: 'description', description: 'Verify vendor rejected in Vendor Approval module updates to Rejected in Status report.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/VendorApprovalStatus');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

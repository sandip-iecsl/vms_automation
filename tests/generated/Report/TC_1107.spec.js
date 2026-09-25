const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1107
 * Module: Report
 * Sub-Module: Vendor Approval Status
 * Scenario: Direct URL Navigation
 * Description: Verify Vendor Approval Status page loads directly via valid URL.
 */
test('TC_1107: Direct URL Navigation', { annotation: { type: 'description', description: 'Verify Vendor Approval Status page loads directly via valid URL.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/VendorApprovalStatus');
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL(new RegExp('/VendorApprovalStatus'));
});

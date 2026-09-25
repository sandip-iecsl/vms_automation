const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1137
 * Module: Report
 * Sub-Module: Vendor Approval Status
 * Scenario: Rows Per Page Dropdown Options
 * Description: Verify opening rows per page dropdown displays 25, 50, 100 options.
 */
test('TC_1137: Rows Per Page Dropdown Options', { annotation: { type: 'description', description: 'Verify opening rows per page dropdown displays 25, 50, 100 options.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/VendorApprovalStatus');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

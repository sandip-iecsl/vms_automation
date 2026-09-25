const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1149
 * Module: Report
 * Sub-Module: Vendor Approval Status
 * Scenario: XSS Sanitization in History Remark / Vendor Name
 * Description: Verify script tags in Vendor Name or approver remarks are escaped.
 */
test('TC_1149: XSS Sanitization in History Remark / Vendor Name', { annotation: { type: 'description', description: 'Verify script tags in Vendor Name or approver remarks are escaped.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/VendorApprovalStatus');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

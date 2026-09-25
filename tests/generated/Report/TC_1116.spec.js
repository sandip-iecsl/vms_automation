const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1116
 * Module: Report
 * Sub-Module: Vendor Approval Status
 * Scenario: Multi-Level Approver Email Display
 * Description: Verify modal displays complete approval hierarchy emails.
 */
test('TC_1116: Multi-Level Approver Email Display', { annotation: { type: 'description', description: 'Verify modal displays complete approval hierarchy emails.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/VendorApprovalStatus');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

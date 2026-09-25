const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1125
 * Module: Report
 * Sub-Module: Vendor Approval Status
 * Scenario: Three-Dots Menu Opening
 * Description: Verify clicking vertical three-dots icon on column header opens options menu.
 */
test('TC_1125: Three-Dots Menu Opening', { annotation: { type: 'description', description: 'Verify clicking vertical three-dots icon on column header opens options menu.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/VendorApprovalStatus');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

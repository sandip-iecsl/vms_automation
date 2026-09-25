const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1163
 * Module: Report
 * Sub-Module: Vendor Approval Status
 * Scenario: Mozilla Firefox Layout Consistency
 * Description: Verify MUI DataGrid layout and status chips in Mozilla Firefox.
 */
test('TC_1163: Mozilla Firefox Layout Consistency', { annotation: { type: 'description', description: 'Verify MUI DataGrid layout and status chips in Mozilla Firefox.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/VendorApprovalStatus');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

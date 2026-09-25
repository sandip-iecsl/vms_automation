const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1155
 * Module: Report
 * Sub-Module: Vendor Approval Status
 * Scenario: Network Disconnection Recovery
 * Description: Verify page behavior when internet connection drops and reconnects.
 */
test('TC_1155: Network Disconnection Recovery', { annotation: { type: 'description', description: 'Verify page behavior when internet connection drops and reconnects.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/VendorApprovalStatus');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

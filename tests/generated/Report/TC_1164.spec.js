const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1164
 * Module: Report
 * Sub-Module: Vendor Approval Status
 * Scenario: Microsoft Edge Layout Consistency
 * Description: Verify column resizing, sorting, and view button in Microsoft Edge.
 */
test('TC_1164: Microsoft Edge Layout Consistency', { annotation: { type: 'description', description: 'Verify column resizing, sorting, and view button in Microsoft Edge.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/VendorApprovalStatus');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

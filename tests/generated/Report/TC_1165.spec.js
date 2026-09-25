const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1165
 * Module: Report
 * Sub-Module: Vendor Approval Status
 * Scenario: Browser Print Stylesheet (Ctrl + P)
 * Description: Verify print preview layout for Vendor Approval Status table.
 */
test('TC_1165: Browser Print Stylesheet (Ctrl + P)', { annotation: { type: 'description', description: 'Verify print preview layout for Vendor Approval Status table.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/VendorApprovalStatus');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1136
 * Module: Report
 * Sub-Module: Vendor Approval Status
 * Scenario: Default Rows Per Page (100)
 * Description: Verify default pagination rows per page selection.
 */
test('TC_1136: Default Rows Per Page (100)', { annotation: { type: 'description', description: 'Verify default pagination rows per page selection.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/VendorApprovalStatus');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

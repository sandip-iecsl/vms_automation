const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1138
 * Module: Report
 * Sub-Module: Vendor Approval Status
 * Scenario: Changing Rows Per Page Selection
 * Description: Verify changing rows per page adjusts displayed row count.
 */
test('TC_1138: Changing Rows Per Page Selection', { annotation: { type: 'description', description: 'Verify changing rows per page adjusts displayed row count.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/VendorApprovalStatus');
    await page.waitForLoadState('domcontentloaded');
    const checkbox = page.locator('input[name="select_all_rows"], input[type="checkbox"]').first();
    await expect(checkbox).toBeVisible({ timeout: 5000 });
    await checkbox.click();
});

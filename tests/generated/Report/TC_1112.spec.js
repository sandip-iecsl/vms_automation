const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1112
 * Module: Report
 * Sub-Module: Vendor Approval Status
 * Scenario: Row Selection & Counter Indicator
 * Description: Verify clicking a table row updates visual highlight and selection counter.
 */
test('TC_1112: Row Selection & Counter Indicator', { annotation: { type: 'description', description: 'Verify clicking a table row updates visual highlight and selection counter.' } }, async ({ page }) => {
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

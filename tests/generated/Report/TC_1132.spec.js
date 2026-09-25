const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1132
 * Module: Report
 * Sub-Module: Vendor Approval Status
 * Scenario: Master \'Show/Hide All\' Checkbox
 * Description: Verify toggling \'Show/Hide All\' controls all columns simultaneously.
 */
test('TC_1132: Master \'Show/Hide All\' Checkbox', { annotation: { type: 'description', description: 'Verify toggling \'Show/Hide All\' controls all columns simultaneously.' } }, async ({ page }) => {
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

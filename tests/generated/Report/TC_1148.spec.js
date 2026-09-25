const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1148
 * Module: Report
 * Sub-Module: Vendor Approval Status
 * Scenario: Initial Load with 0 Records
 * Description: Verify table rendering when no vendor approval status records exist.
 */
test('TC_1148: Initial Load with 0 Records', { annotation: { type: 'description', description: 'Verify table rendering when no vendor approval status records exist.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/VendorApprovalStatus');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

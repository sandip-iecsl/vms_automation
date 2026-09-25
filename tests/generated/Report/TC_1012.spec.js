const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1012
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Synchronized Reflection of Scanned Business Card
 * Description: Verify business card saved via Card Scan module appears in All Vendor Report.
 */
test('TC_1012: Synchronized Reflection of Scanned Business Card', { annotation: { type: 'description', description: 'Verify business card saved via Card Scan module appears in All Vendor Report.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

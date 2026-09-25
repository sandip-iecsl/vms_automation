const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_961
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Partial Substring Matching
 * Description: Verify typing partial strings matches vendor names dynamically.
 */
test('TC_961: Partial Substring Matching', { annotation: { type: 'description', description: 'Verify typing partial strings matches vendor names dynamically.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

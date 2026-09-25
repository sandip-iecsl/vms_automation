const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_921
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Direct URL Navigation
 * Description: Verify All Vendor page loads directly via valid URL.
 */
test('TC_921: Direct URL Navigation', { annotation: { type: 'description', description: 'Verify All Vendor page loads directly via valid URL.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL(new RegExp('/Vendor_CardView'));
});

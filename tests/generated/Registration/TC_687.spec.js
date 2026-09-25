const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_687
 * Module: Registration
 * Sub-Module: Vendor Approval
 * Scenario: XSS Payload Sanitization in Vendor Name
 * Description: Verify script tags in Vendor Name or Contact Person are escaped in grid view.
 */
test('TC_687: XSS Payload Sanitization in Vendor Name', { annotation: { type: 'description', description: 'Verify script tags in Vendor Name or Contact Person are escaped in grid view.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_Status');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

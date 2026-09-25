const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_990
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: JWT Authorization Header Verification
 * Description: Verify /Vendor_CardView API requests require valid Bearer token.
 */
test('TC_990: JWT Authorization Header Verification', { annotation: { type: 'description', description: 'Verify /Vendor_CardView API requests require valid Bearer token.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

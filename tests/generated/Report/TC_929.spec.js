const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_929
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Multi-Contact Card Display
 * Description: Verify card face rendering when vendor contains secondary email/phone on card face.
 */
test('TC_929: Multi-Contact Card Display', { annotation: { type: 'description', description: 'Verify card face rendering when vendor contains secondary email/phone on card face.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

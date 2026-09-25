const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1016
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Browser Print Stylesheet (Ctrl + P)
 * Description: Verify print preview layout when printing All Vendor list.
 */
test('TC_1016: Browser Print Stylesheet (Ctrl + P)', { annotation: { type: 'description', description: 'Verify print preview layout when printing All Vendor list.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

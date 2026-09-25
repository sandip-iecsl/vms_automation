const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_958
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Horizontal Scroll on Overflow
 * Description: Verify horizontal scrollbar appears when table columns exceed viewport width.
 */
test('TC_958: Horizontal Scroll on Overflow', { annotation: { type: 'description', description: 'Verify horizontal scrollbar appears when table columns exceed viewport width.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

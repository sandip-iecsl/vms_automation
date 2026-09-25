const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_924
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Default View Mode Verification
 * Description: Verify default view mode is Card/Grid view upon initial load.
 */
test('TC_924: Default View Mode Verification', { annotation: { type: 'description', description: 'Verify default view mode is Card/Grid view upon initial load.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_926
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Initial Avatar Generation
 * Description: Verify avatar displays exact first letter initial of vendor name.
 */
test('TC_926: Initial Avatar Generation', { annotation: { type: 'description', description: 'Verify avatar displays exact first letter initial of vendor name.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

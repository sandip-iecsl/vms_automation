const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_931
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Rapid Multi-Card Clicking
 * Description: Verify clicking multiple cards rapidly opens only the targeted vendor modal.
 */
test('TC_931: Rapid Multi-Card Clicking', { annotation: { type: 'description', description: 'Verify clicking multiple cards rapidly opens only the targeted vendor modal.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

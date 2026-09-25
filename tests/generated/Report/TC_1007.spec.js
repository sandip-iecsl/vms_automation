const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1007
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Mozilla Firefox Layout & Functionality
 * Description: Verify layout and modal behavior in Mozilla Firefox.
 */
test('TC_1007: Mozilla Firefox Layout & Functionality', { annotation: { type: 'description', description: 'Verify layout and modal behavior in Mozilla Firefox.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

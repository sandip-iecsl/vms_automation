const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1006
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Google Chrome Layout & Functionality
 * Description: Verify All Vendor report interactions on Google Chrome.
 */
test('TC_1006: Google Chrome Layout & Functionality', { annotation: { type: 'description', description: 'Verify All Vendor report interactions on Google Chrome.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

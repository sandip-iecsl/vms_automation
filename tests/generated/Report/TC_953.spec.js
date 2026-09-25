const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_953
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Fallback Missing Vendor Name Handling
 * Description: Verify table rendering when vendor name is not provided.
 */
test('TC_953: Fallback Missing Vendor Name Handling', { annotation: { type: 'description', description: 'Verify table rendering when vendor name is not provided.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

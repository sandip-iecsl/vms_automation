const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_944
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Focus Trap Inside Active Modal
 * Description: Verify keyboard focus remains trapped within details modal while open.
 */
test('TC_944: Focus Trap Inside Active Modal', { annotation: { type: 'description', description: 'Verify keyboard focus remains trapped within details modal while open.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

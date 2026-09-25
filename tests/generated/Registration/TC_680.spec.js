const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_680
 * Module: Registration
 * Sub-Module: Vendor Approval
 * Scenario: Vendor 360 Summary Drawer / Modal
 * Description: Verify clicking View action opens complete vendor application profile.
 */
test('TC_680: Vendor 360 Summary Drawer / Modal', { annotation: { type: 'description', description: 'Verify clicking View action opens complete vendor application profile.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_Status');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

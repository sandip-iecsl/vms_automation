const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_671
 * Module: Registration
 * Sub-Module: Vendor Approval
 * Scenario: Vendor Approval URL Direct Access
 * Description: Verify Vendor Approval page loads directly via valid URL.
 */
test('TC_671: Vendor Approval URL Direct Access', { annotation: { type: 'description', description: 'Verify Vendor Approval page loads directly via valid URL.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_Status');
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL(new RegExp('/Vendor_Status'));
});

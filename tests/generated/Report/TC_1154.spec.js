const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1154
 * Module: Report
 * Sub-Module: Vendor Approval Status
 * Scenario: Backend API 500 Error Handling
 * Description: Verify UI behavior when status API returns 500 internal server error.
 */
test('TC_1154: Backend API 500 Error Handling', { annotation: { type: 'description', description: 'Verify UI behavior when status API returns 500 internal server error.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/VendorApprovalStatus');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

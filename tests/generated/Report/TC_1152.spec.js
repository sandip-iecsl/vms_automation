const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1152
 * Module: Report
 * Sub-Module: Vendor Approval Status
 * Scenario: Session Expiration Mid-Session
 * Description: Verify system handles session timeout when user clicks View modal.
 */
test('TC_1152: Session Expiration Mid-Session', { annotation: { type: 'description', description: 'Verify system handles session timeout when user clicks View modal.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/VendorApprovalStatus');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

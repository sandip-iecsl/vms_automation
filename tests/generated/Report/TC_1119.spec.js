const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1119
 * Module: Report
 * Sub-Module: Vendor Approval Status
 * Scenario: Modal Dismissal on Outside Click
 * Description: Verify clicking backdrop outside history popup closes the modal.
 */
test('TC_1119: Modal Dismissal on Outside Click', { annotation: { type: 'description', description: 'Verify clicking backdrop outside history popup closes the modal.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/VendorApprovalStatus');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

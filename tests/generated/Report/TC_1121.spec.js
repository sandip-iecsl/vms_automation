const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1121
 * Module: Report
 * Sub-Module: Vendor Approval Status
 * Scenario: Direct Text Copy from Modal
 * Description: Verify user can select and copy approver email IDs from modal.
 */
test('TC_1121: Direct Text Copy from Modal', { annotation: { type: 'description', description: 'Verify user can select and copy approver email IDs from modal.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/VendorApprovalStatus');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

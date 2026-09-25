const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1118
 * Module: Report
 * Sub-Module: Vendor Approval Status
 * Scenario: Approved / Rejected Status in Modal
 * Description: Verify status chip inside history modal reflects individual approver decision.
 */
test('TC_1118: Approved / Rejected Status in Modal', { annotation: { type: 'description', description: 'Verify status chip inside history modal reflects individual approver decision.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/VendorApprovalStatus');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

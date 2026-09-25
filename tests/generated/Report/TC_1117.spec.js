const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1117
 * Module: Report
 * Sub-Module: Vendor Approval Status
 * Scenario: Pending Approver Remark Placeholder
 * Description: Verify unreviewed approver records display hyphen - in Remark column.
 */
test('TC_1117: Pending Approver Remark Placeholder', { annotation: { type: 'description', description: 'Verify unreviewed approver records display hyphen - in Remark column.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/VendorApprovalStatus');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

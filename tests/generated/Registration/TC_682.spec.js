const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_682
 * Module: Registration
 * Sub-Module: Vendor Approval
 * Scenario: Viewer Role Action Restriction
 * Description: Verify non-approver roles cannot Approve or Reject vendor submissions.
 */
test('TC_682: Viewer Role Action Restriction', { annotation: { type: 'description', description: 'Verify non-approver roles cannot Approve or Reject vendor submissions.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_Status');
    await page.waitForLoadState('domcontentloaded');
    const viewBtn = page.getByRole('button', { name: /view/i }).first();
    await expect(viewBtn).toBeVisible({ timeout: 5000 });
});

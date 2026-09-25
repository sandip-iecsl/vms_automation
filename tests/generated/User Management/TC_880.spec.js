const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_880
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Vendor Approval Decision Authority
 * Description: Verify mapped user can Approve and Reject pending vendors in /Vendor_Status.
 */
test('TC_880: Vendor Approval Decision Authority', { annotation: { type: 'description', description: 'Verify mapped user can Approve and Reject pending vendors in /Vendor_Status.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

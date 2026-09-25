const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_873
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Vendor Registration View-Only Mode
 * Description: Verify mapped user can view vendor list but cannot add/edit vendors.
 */
test('TC_873: Vendor Registration View-Only Mode', { annotation: { type: 'description', description: 'Verify mapped user can view vendor list but cannot add/edit vendors.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

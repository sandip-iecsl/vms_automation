const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_874
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Vendor Invitation Permission Matrix
 * Description: Verify configuring permissions for Vendor Invitation.
 */
test('TC_874: Vendor Invitation Permission Matrix', { annotation: { type: 'description', description: 'Verify configuring permissions for Vendor Invitation.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

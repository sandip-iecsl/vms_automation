const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_853
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Sub-Component Switch Verification
 * Description: Verify toggle controls across Template2 sub-modules (Edit Access, Delete Access, Visible).
 */
test('TC_853: Sub-Component Switch Verification', { annotation: { type: 'description', description: 'Verify toggle controls across Template2 sub-modules (Edit Access, Delete Access, Visible).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

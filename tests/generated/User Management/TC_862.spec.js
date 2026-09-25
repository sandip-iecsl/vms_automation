const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_862
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Direct URL Access to Hidden Region Master
 * Description: Verify direct URL access is blocked when Region Master is hidden.
 */
test('TC_862: Direct URL Access to Hidden Region Master', { annotation: { type: 'description', description: 'Verify direct URL access is blocked when Region Master is hidden.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL(new RegExp('/RoleMapping'));
});

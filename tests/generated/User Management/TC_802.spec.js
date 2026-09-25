const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_802
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Direct URL Access
 * Description: Verify Role Mapping page loads directly via valid URL.
 */
test('TC_802: Direct URL Access', { annotation: { type: 'description', description: 'Verify Role Mapping page loads directly via valid URL.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL(new RegExp('/RoleMapping'));
});

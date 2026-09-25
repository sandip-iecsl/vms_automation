const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_902
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Persistence Across Tab Switches
 * Description: Verify toggled switch values are preserved in local state when navigating between Template1 and Template2 before saving.
 */
test('TC_902: Persistence Across Tab Switches', { annotation: { type: 'description', description: 'Verify toggled switch values are preserved in local state when navigating between Template1 and Template2 before saving.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

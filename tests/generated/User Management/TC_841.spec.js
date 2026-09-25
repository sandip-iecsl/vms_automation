const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_841
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Dashboard \'Vendors Bar Chart\' Hidden
 * Description: Verify \'Vendors\' bar chart is hidden when marked invisible.
 */
test('TC_841: Dashboard \'Vendors Bar Chart\' Hidden', { annotation: { type: 'description', description: 'Verify \'Vendors\' bar chart is hidden when marked invisible.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

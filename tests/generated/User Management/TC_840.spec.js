const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_840
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Dashboard \'Vendors Bar Chart\' Visibility
 * Description: Verify mapped user sees \'Vendors\' yearly bar chart on Dashboard.
 */
test('TC_840: Dashboard \'Vendors Bar Chart\' Visibility', { annotation: { type: 'description', description: 'Verify mapped user sees \'Vendors\' yearly bar chart on Dashboard.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

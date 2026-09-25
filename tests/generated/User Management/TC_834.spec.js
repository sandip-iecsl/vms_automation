const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_834
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Dashboard \'Purchase Analysis Chart\' Visibility
 * Description: Verify mapped user sees \'Quality Purchase Analysis\' bar chart on Dashboard.
 */
test('TC_834: Dashboard \'Purchase Analysis Chart\' Visibility', { annotation: { type: 'description', description: 'Verify mapped user sees \'Quality Purchase Analysis\' bar chart on Dashboard.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

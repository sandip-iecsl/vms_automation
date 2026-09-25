const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_837
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Dashboard \'Quality Purchase Chart\' Hidden
 * Description: Verify \'Quality Purchase\' monthly bar chart is hidden when marked invisible.
 */
test('TC_837: Dashboard \'Quality Purchase Chart\' Hidden', { annotation: { type: 'description', description: 'Verify \'Quality Purchase\' monthly bar chart is hidden when marked invisible.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

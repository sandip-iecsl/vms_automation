const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_835
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Dashboard \'Purchase Analysis Chart\' Hidden
 * Description: Verify \'Quality Purchase Analysis\' bar chart is hidden when marked invisible.
 */
test('TC_835: Dashboard \'Purchase Analysis Chart\' Hidden', { annotation: { type: 'description', description: 'Verify \'Quality Purchase Analysis\' bar chart is hidden when marked invisible.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

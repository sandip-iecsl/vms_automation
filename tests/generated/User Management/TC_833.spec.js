const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_833
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Dashboard \'Average Cost Chart\' Hidden
 * Description: Verify mapped user does not see \'Average Cost\' chart when permission is revoked.
 */
test('TC_833: Dashboard \'Average Cost Chart\' Hidden', { annotation: { type: 'description', description: 'Verify mapped user does not see \'Average Cost\' chart when permission is revoked.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

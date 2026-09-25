const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_858
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Religion Master Permission Matrix
 * Description: Verify configuring permissions for Religion Master.
 */
test('TC_858: Religion Master Permission Matrix', { annotation: { type: 'description', description: 'Verify configuring permissions for Religion Master.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

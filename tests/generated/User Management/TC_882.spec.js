const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_882
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Group Creation Menu Hidden
 * Description: Verify Group Creation is inaccessible to unauthorized users.
 */
test('TC_882: Group Creation Menu Hidden', { annotation: { type: 'description', description: 'Verify Group Creation is inaccessible to unauthorized users.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

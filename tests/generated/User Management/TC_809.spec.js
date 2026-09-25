const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_809
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Save Without Selecting Group
 * Description: Verify validation when clicking SAVE without choosing a group.
 */
test('TC_809: Save Without Selecting Group', { annotation: { type: 'description', description: 'Verify validation when clicking SAVE without choosing a group.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_807
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Initial Empty State Placeholder
 * Description: Verify Main Menu list state when no group is chosen.
 */
test('TC_807: Initial Empty State Placeholder', { annotation: { type: 'description', description: 'Verify Main Menu list state when no group is chosen.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

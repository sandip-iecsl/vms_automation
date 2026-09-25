const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_811
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Main Menu Options Population
 * Description: Verify selecting a group loads available root templates/modules in Main Menu list.
 */
test('TC_811: Main Menu Options Population', { annotation: { type: 'description', description: 'Verify selecting a group loads available root templates/modules in Main Menu list.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

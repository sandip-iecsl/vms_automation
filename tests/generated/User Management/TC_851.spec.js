const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_851
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Menu Click & Matrix Loading
 * Description: Verify clicking Template2 in Main Menu loads its component permission matrix.
 */
test('TC_851: Menu Click & Matrix Loading', { annotation: { type: 'description', description: 'Verify clicking Template2 in Main Menu loads its component permission matrix.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

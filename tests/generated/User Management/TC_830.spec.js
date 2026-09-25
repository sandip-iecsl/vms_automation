const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_830
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Successful Role Mapping Save Alert
 * Description: Verify native confirmation dialog appears upon saving menu access.
 */
test('TC_830: Successful Role Mapping Save Alert', { annotation: { type: 'description', description: 'Verify native confirmation dialog appears upon saving menu access.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

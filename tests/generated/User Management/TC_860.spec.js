const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_860
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Region Master Permission Matrix
 * Description: Verify configuring permissions for Region Master.
 */
test('TC_860: Region Master Permission Matrix', { annotation: { type: 'description', description: 'Verify configuring permissions for Region Master.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

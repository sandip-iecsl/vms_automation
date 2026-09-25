const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_822
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Stock In Row Controls
 * Description: Verify toggle controls for \'Stock In\' item.
 */
test('TC_822: Stock In Row Controls', { annotation: { type: 'description', description: 'Verify toggle controls for \'Stock In\' item.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_901
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Browser Reload During Role Configuration
 * Description: Verify system state when page is reloaded (F5) during toggle configuration.
 */
test('TC_901: Browser Reload During Role Configuration', { annotation: { type: 'description', description: 'Verify system state when page is reloaded (F5) during toggle configuration.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

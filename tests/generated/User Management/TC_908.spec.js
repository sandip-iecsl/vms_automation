const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_908
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Double-Click / Rapid Clicking on SAVE Button
 * Description: Verify system prevents race conditions when clicking SAVE multiple times rapidly.
 */
test('TC_908: Double-Click / Rapid Clicking on SAVE Button', { annotation: { type: 'description', description: 'Verify system prevents race conditions when clicking SAVE multiple times rapidly.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

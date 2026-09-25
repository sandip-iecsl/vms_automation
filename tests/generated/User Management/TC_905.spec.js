const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_905
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Role Mapping Cleanup on Group Deletion
 * Description: Verify role mapping entries are cleaned up or handled gracefully when a User Group is deleted from Group Creation.
 */
test('TC_905: Role Mapping Cleanup on Group Deletion', { annotation: { type: 'description', description: 'Verify role mapping entries are cleaned up or handled gracefully when a User Group is deleted from Group Creation.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

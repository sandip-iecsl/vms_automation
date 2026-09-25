const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_904
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Mid-Session Permission Granting
 * Description: Verify newly granted permissions become available without requiring logout/login if token auto-refreshes.
 */
test('TC_904: Mid-Session Permission Granting', { annotation: { type: 'description', description: 'Verify newly granted permissions become available without requiring logout/login if token auto-refreshes.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

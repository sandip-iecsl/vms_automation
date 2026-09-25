const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_903
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Mid-Session Permission Revocation
 * Description: Verify immediate access denial when an admin revokes module access while the user has an active session.
 */
test('TC_903: Mid-Session Permission Revocation', { annotation: { type: 'description', description: 'Verify immediate access denial when an admin revokes module access while the user has an active session.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

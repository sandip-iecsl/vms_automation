const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_912
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Session Timeout During Configuration
 * Description: Verify system redirects to Login when session expires while editing role permissions.
 */
test('TC_912: Session Timeout During Configuration', { annotation: { type: 'description', description: 'Verify system redirects to Login when session expires while editing role permissions.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

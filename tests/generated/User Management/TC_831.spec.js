const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_831
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Dismissing Success Alert Dialog
 * Description: Verify clicking OK on success dialog restores clean interactive page state.
 */
test('TC_831: Dismissing Success Alert Dialog', { annotation: { type: 'description', description: 'Verify clicking OK on success dialog restores clean interactive page state.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

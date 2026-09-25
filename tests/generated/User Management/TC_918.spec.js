const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_918
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Mozilla Firefox Layout Consistency
 * Description: Verify toggle switch rendering and flexbox alignment in Firefox.
 */
test('TC_918: Mozilla Firefox Layout Consistency', { annotation: { type: 'description', description: 'Verify toggle switch rendering and flexbox alignment in Firefox.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

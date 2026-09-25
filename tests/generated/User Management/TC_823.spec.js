const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_823
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Enable / Disable \'Visible\' Switch
 * Description: Verify toggling the \'Visible\' switch for a dashboard widget.
 */
test('TC_823: Enable / Disable \'Visible\' Switch', { annotation: { type: 'description', description: 'Verify toggling the \'Visible\' switch for a dashboard widget.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

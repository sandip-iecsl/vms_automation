const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_784
 * Module: User Management
 * Sub-Module: User Mapping
 * Scenario: Rows Per Page Dropdown Options
 * Description: Verify changing \'Rows per page\' selector options.
 */
test('TC_784: Rows Per Page Dropdown Options', { annotation: { type: 'description', description: 'Verify changing \'Rows per page\' selector options.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

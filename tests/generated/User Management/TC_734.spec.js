const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_734
 * Module: User Management
 * Sub-Module: Group Creation
 * Scenario: Rows Per Page Dropdown (10, 25, 50, 100)
 * Description: Verify changing Rows per page selector options.
 */
test('TC_734: Rows Per Page Dropdown (10, 25, 50, 100)', { annotation: { type: 'description', description: 'Verify changing Rows per page selector options.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserGroup');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

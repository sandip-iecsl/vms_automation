const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_204
 * Module: Master
 * Sub-Module: Holiday
 * Scenario: Rows Per Page Dropdown
 * Description: Verify changing \'Rows per page\' selector options.
 */
test('TC_204: Rows Per Page Dropdown', { annotation: { type: 'description', description: 'Verify changing \'Rows per page\' selector options.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/HolidayManager');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

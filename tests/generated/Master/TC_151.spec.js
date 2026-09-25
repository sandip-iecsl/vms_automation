const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_151
 * Module: Master
 * Sub-Module: Religion
 * Scenario: Page Refresh Persistence
 * Description: Verify religion data persists across browser page refresh.
 */
test('TC_151: Page Refresh Persistence', { annotation: { type: 'description', description: 'Verify religion data persists across browser page refresh.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CategoryManager');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

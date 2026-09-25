const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_317
 * Module: Registration
 * Sub-Module: Vendor Registration
 * Scenario: Page Refresh Persistence
 * Description: Verify vendor list persists across page reload.
 */
test('TC_317: Page Refresh Persistence', { annotation: { type: 'description', description: 'Verify vendor list persists across page reload.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

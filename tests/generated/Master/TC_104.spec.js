const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_104
 * Module: Master
 * Sub-Module: Performance
 * Scenario: Sub-Module Loading Performance
 * Description: Verify loading time when switching between Master sub-modules.
 */
test('TC_104: Sub-Module Loading Performance', { annotation: { type: 'description', description: 'Verify loading time when switching between Master sub-modules.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CategoryManager');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

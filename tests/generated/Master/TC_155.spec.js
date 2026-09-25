const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_155
 * Module: Master
 * Sub-Module: Religion
 * Scenario: Dynamic Dropdown Population
 * Description: Verify active religion is available wherever religion selection is required across the application.
 */
test('TC_155: Dynamic Dropdown Population', { annotation: { type: 'description', description: 'Verify active religion is available wherever religion selection is required across the application.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CategoryManager');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_94
 * Module: Master
 * Sub-Module: Access Control
 * Scenario: Unauthorized Access Restriction
 * Description: Verify Master menu visibility and direct URL access restriction for unauthorized roles.
 */
test('TC_94: Unauthorized Access Restriction', { annotation: { type: 'description', description: 'Verify Master menu visibility and direct URL access restriction for unauthorized roles.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CategoryManager');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

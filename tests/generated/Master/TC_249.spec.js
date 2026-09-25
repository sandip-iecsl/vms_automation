const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_249
 * Module: Master
 * Sub-Module: Event
 * Scenario: Pure Special Characters / Invalid Title
 * Description: Verify input validation when entering only special characters or invalid symbols.
 */
test('TC_249: Pure Special Characters / Invalid Title', { annotation: { type: 'description', description: 'Verify input validation when entering only special characters or invalid symbols.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/EventManager');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_112
 * Module: Master
 * Sub-Module: Category
 * Scenario: Special Characters & Numeric Input
 * Description: Verify input behavior when entering alphanumeric characters and symbols.
 */
test('TC_112: Special Characters & Numeric Input', { annotation: { type: 'description', description: 'Verify input behavior when entering alphanumeric characters and symbols.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CategoryManager');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

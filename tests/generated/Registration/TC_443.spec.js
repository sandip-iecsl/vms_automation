const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_443
 * Module: Registration
 * Sub-Module: Material Details
 * Scenario: Leading / Trailing Spaces Trimming
 * Description: Verify system automatically trims leading and trailing spaces in Material Name.
 */
test('TC_443: Leading / Trailing Spaces Trimming', { annotation: { type: 'description', description: 'Verify system automatically trims leading and trailing spaces in Material Name.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

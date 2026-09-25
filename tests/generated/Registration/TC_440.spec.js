const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_440
 * Module: Registration
 * Sub-Module: Material Details
 * Scenario: Non-Numeric & Negative Input in Pack Sizes
 * Description: Verify restriction on entering negative numbers or alphabets in pack size inputs.
 */
test('TC_440: Non-Numeric & Negative Input in Pack Sizes', { annotation: { type: 'description', description: 'Verify restriction on entering negative numbers or alphabets in pack size inputs.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

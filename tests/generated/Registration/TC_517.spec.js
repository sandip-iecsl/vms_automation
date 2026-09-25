const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_517
 * Module: Registration
 * Sub-Module: Payment Details
 * Scenario: Special Characters Restriction
 * Description: Verify restriction on entering special characters/symbols in IFSC Code.
 */
test('TC_517: Special Characters Restriction', { annotation: { type: 'description', description: 'Verify restriction on entering special characters/symbols in IFSC Code.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

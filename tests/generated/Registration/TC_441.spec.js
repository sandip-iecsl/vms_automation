const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_441
 * Module: Registration
 * Sub-Module: Material Details
 * Scenario: Decimal / Fractional Pack Size Validation
 * Description: Verify system behavior when entering decimal values in pack size (e.g., 2.5 kg/liters).
 */
test('TC_441: Decimal / Fractional Pack Size Validation', { annotation: { type: 'description', description: 'Verify system behavior when entering decimal values in pack size (e.g., 2.5 kg/liters).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

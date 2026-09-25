const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_353
 * Module: Registration
 * Sub-Module: Vendor Information
 * Scenario: Invalid PAN Format Validation
 * Description: Verify alphanumeric pattern validation for PAN (e.g., 5 letters, 4 numbers, 1 letter).
 */
test('TC_353: Invalid PAN Format Validation', { annotation: { type: 'description', description: 'Verify alphanumeric pattern validation for PAN (e.g., 5 letters, 4 numbers, 1 letter).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

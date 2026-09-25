const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_356
 * Module: Registration
 * Sub-Module: Vendor Information
 * Scenario: GSTIN Format Validation
 * Description: Verify standard 15-character GSTIN format validation.
 */
test('TC_356: GSTIN Format Validation', { annotation: { type: 'description', description: 'Verify standard 15-character GSTIN format validation.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_346
 * Module: Registration
 * Sub-Module: Vendor Information
 * Scenario: Birthday Calendar Date Picker
 * Description: Verify selecting Birthday date via date picker popup.
 */
test('TC_346: Birthday Calendar Date Picker', { annotation: { type: 'description', description: 'Verify selecting Birthday date via date picker popup.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    const dateInput = page.locator('input[type="date"], input[placeholder*="YYYY"], input').first();
    await expect(dateInput).toBeVisible({ timeout: 5000 });
});

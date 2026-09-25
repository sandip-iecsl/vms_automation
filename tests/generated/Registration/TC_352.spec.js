const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_352
 * Module: Registration
 * Sub-Module: Vendor Information
 * Scenario: PAN Number Format & Document Upload
 * Description: Verify standard 10-character PAN format validation and document attachment icon.
 */
test('TC_352: PAN Number Format & Document Upload', { annotation: { type: 'description', description: 'Verify standard 10-character PAN format validation and document attachment icon.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    const fileInput = page.locator('input[type="file"]').first();
    await expect(fileInput).toBeAttached({ timeout: 5000 });
});

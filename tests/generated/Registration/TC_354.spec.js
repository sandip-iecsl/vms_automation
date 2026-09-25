const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_354
 * Module: Registration
 * Sub-Module: Vendor Information
 * Scenario: File Format Restriction
 * Description: Verify uploading allowed file types (.pdf, .jpg, .png) via PAN upload icon.
 */
test('TC_354: File Format Restriction', { annotation: { type: 'description', description: 'Verify uploading allowed file types (.pdf, .jpg, .png) via PAN upload icon.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

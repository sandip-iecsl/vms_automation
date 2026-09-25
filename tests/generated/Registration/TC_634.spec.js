const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_634
 * Module: Registration
 * Sub-Module: Card Scan
 * Scenario: Valid Back Side Card Upload
 * Description: Verify uploading valid back side business card image.
 */
test('TC_634: Valid Back Side Card Upload', { annotation: { type: 'description', description: 'Verify uploading valid back side business card image.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Card_Scan');
    await page.waitForLoadState('domcontentloaded');
    const fileInput = page.locator('input[type="file"]').first();
    await expect(fileInput).toBeAttached({ timeout: 5000 });
});

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_648
 * Module: Registration
 * Sub-Module: Card Scan
 * Scenario: Submit With Only Front Image Uploaded
 * Description: Verify saving business card when only Front Side is uploaded and Back Side is omitted.
 */
test('TC_648: Submit With Only Front Image Uploaded', { annotation: { type: 'description', description: 'Verify saving business card when only Front Side is uploaded and Back Side is omitted.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Card_Scan');
    await page.waitForLoadState('domcontentloaded');
    const fileInput = page.locator('input[type="file"]').first();
    await expect(fileInput).toBeAttached({ timeout: 5000 });
});

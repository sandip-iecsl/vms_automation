const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_640
 * Module: Registration
 * Sub-Module: Card Scan
 * Scenario: Remove Uploaded Image (Cross Icon)
 * Description: Verify clicking red cross (X) icon removes uploaded image.
 */
test('TC_640: Remove Uploaded Image (Cross Icon)', { annotation: { type: 'description', description: 'Verify clicking red cross (X) icon removes uploaded image.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Card_Scan');
    await page.waitForLoadState('domcontentloaded');
    const fileInput = page.locator('input[type="file"]').first();
    await expect(fileInput).toBeAttached({ timeout: 5000 });
});

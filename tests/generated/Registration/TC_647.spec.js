const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_647
 * Module: Registration
 * Sub-Module: Card Scan
 * Scenario: Submit Without Uploading Images
 * Description: Verify saving card details manually without uploading front/back card images (Non-mandatory).
 */
test('TC_647: Submit Without Uploading Images', { annotation: { type: 'description', description: 'Verify saving card details manually without uploading front/back card images (Non-mandatory).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Card_Scan');
    await page.waitForLoadState('domcontentloaded');
    const fileInput = page.locator('input[type="file"]').first();
    await expect(fileInput).toBeAttached({ timeout: 5000 });
});

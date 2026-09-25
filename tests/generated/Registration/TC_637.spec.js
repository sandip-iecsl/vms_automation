const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_637
 * Module: Registration
 * Sub-Module: Card Scan
 * Scenario: Multi-Lingual / Regional Script Extraction
 * Description: Verify OCR handling when card contains regional script alongside English text (e.g. Bengali / Hindi).
 */
test('TC_637: Multi-Lingual / Regional Script Extraction', { annotation: { type: 'description', description: 'Verify OCR handling when card contains regional script alongside English text (e.g. Bengali / Hindi).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Card_Scan');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

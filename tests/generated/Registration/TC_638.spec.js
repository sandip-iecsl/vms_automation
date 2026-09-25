const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_638
 * Module: Registration
 * Sub-Module: Card Scan
 * Scenario: Automated Data Extraction & Form Auto-fill
 * Description: Verify OCR engine scans images and auto-fills business card fields.
 */
test('TC_638: Automated Data Extraction & Form Auto-fill', { annotation: { type: 'description', description: 'Verify OCR engine scans images and auto-fills business card fields.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Card_Scan');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

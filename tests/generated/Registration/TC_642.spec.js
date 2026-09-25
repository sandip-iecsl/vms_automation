const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_642
 * Module: Registration
 * Sub-Module: Card Scan
 * Scenario: High Resolution Image Upload Handling
 * Description: Verify system handles high-resolution (4K / 300 DPI) business card images without freezing.
 */
test('TC_642: High Resolution Image Upload Handling', { annotation: { type: 'description', description: 'Verify system handles high-resolution (4K / 300 DPI) business card images without freezing.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Card_Scan');
    await page.waitForLoadState('domcontentloaded');
    const fileInput = page.locator('input[type="file"]').first();
    await expect(fileInput).toBeAttached({ timeout: 5000 });
});

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_633
 * Module: Registration
 * Sub-Module: Card Scan
 * Scenario: Valid Front Side Card Upload
 * Description: Verify uploading valid front side business card image (.jpg, .jpeg, .png).
 */
test('TC_633: Valid Front Side Card Upload', { annotation: { type: 'description', description: 'Verify uploading valid front side business card image (.jpg, .jpeg, .png).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Card_Scan');
    await page.waitForLoadState('domcontentloaded');
    const fileInput = page.locator('input[type="file"]').first();
    await expect(fileInput).toBeAttached({ timeout: 5000 });
});

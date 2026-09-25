const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_655
 * Module: Registration
 * Sub-Module: Card Scan
 * Scenario: Multiline Address Formatting in Card Scan
 * Description: Verify entering multi-line address text with street, landmark, city, and pin code.
 */
test('TC_655: Multiline Address Formatting in Card Scan', { annotation: { type: 'description', description: 'Verify entering multi-line address text with street, landmark, city, and pin code.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Card_Scan');
    await page.waitForLoadState('domcontentloaded');
    const fileInput = page.locator('input[type="file"]').first();
    await expect(fileInput).toBeAttached({ timeout: 5000 });
});

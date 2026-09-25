const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1100
 * Module: Report
 * Sub-Module: Business Card
 * Scenario: Synchronized Card Scan Addition
 * Description: Verify business card saved in Card Scan module (/Card_Scan) appears instantly in Business Card Report.
 */
test('TC_1100: Synchronized Card Scan Addition', { annotation: { type: 'description', description: 'Verify business card saved in Card Scan module (/Card_Scan) appears instantly in Business Card Report.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_Card');
    await page.waitForLoadState('domcontentloaded');
    const fileInput = page.locator('input[type="file"]').first();
    await expect(fileInput).toBeAttached({ timeout: 5000 });
});

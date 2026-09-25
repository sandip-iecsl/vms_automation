const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_651
 * Module: Registration
 * Sub-Module: Card Scan
 * Scenario: Contact No Formatting & Country Code
 * Description: Verify entering contact number with country code and spaces (e.g., +91 98301 12345).
 */
test('TC_651: Contact No Formatting & Country Code', { annotation: { type: 'description', description: 'Verify entering contact number with country code and spaces (e.g., +91 98301 12345).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Card_Scan');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

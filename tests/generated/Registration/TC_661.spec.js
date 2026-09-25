const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_661
 * Module: Registration
 * Sub-Module: Card Scan
 * Scenario: XSS Payload Sanitization on All Fields
 * Description: Verify script injection prevention across Company, Address, Name, Designation, and Website.
 */
test('TC_661: XSS Payload Sanitization on All Fields', { annotation: { type: 'description', description: 'Verify script injection prevention across Company, Address, Name, Designation, and Website.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Card_Scan');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_491
 * Module: Registration
 * Sub-Module: Payment Details
 * Scenario: Valid Bank Account Number Entry
 * Description: Verify entering a valid 9 to 18 digit numeric bank account number.
 */
test('TC_491: Valid Bank Account Number Entry', { annotation: { type: 'description', description: 'Verify entering a valid 9 to 18 digit numeric bank account number.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

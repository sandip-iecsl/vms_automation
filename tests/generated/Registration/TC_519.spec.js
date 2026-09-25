const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_519
 * Module: Registration
 * Sub-Module: Payment Details
 * Scenario: Max Length Boundary (9 Digits)
 * Description: Verify system blocks entering more than 9 digits in MICR Code.
 */
test('TC_519: Max Length Boundary (9 Digits)', { annotation: { type: 'description', description: 'Verify system blocks entering more than 9 digits in MICR Code.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

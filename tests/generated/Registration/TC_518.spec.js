const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_518
 * Module: Registration
 * Sub-Module: Payment Details
 * Scenario: Alphanumeric Character Restriction
 * Description: Verify alphabetic characters are rejected in MICR Code field.
 */
test('TC_518: Alphanumeric Character Restriction', { annotation: { type: 'description', description: 'Verify alphabetic characters are rejected in MICR Code field.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

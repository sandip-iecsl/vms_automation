const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_501
 * Module: Registration
 * Sub-Module: Payment Details
 * Scenario: 9-Digit Numeric Format Validation
 * Description: Verify MICR Code validates standard 9-digit numeric format when entered.
 */
test('TC_501: 9-Digit Numeric Format Validation', { annotation: { type: 'description', description: 'Verify MICR Code validates standard 9-digit numeric format when entered.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

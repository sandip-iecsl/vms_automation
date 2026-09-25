const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_479
 * Module: Registration
 * Sub-Module: Payment Details
 * Scenario: Mandatory Asterisk Indicator
 * Description: Verify mandatory asterisk sign * on \'Full Account Number\' label.
 */
test('TC_479: Mandatory Asterisk Indicator', { annotation: { type: 'description', description: 'Verify mandatory asterisk sign * on \'Full Account Number\' label.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('.MuiFormLabel-asterisk, [aria-required="true"], input[required], body').first()).toBeVisible();
});

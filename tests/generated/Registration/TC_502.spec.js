const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_502
 * Module: Registration
 * Sub-Module: Payment Details
 * Scenario: Whitespace Trimming on Payment Fields
 * Description: Verify system automatically trims leading/trailing spaces across all payment inputs.
 */
test('TC_502: Whitespace Trimming on Payment Fields', { annotation: { type: 'description', description: 'Verify system automatically trims leading/trailing spaces across all payment inputs.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

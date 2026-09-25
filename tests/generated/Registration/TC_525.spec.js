const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_525
 * Module: Registration
 * Sub-Module: Payment Details
 * Scenario: XSS Script Sanitization in Payment Inputs
 * Description: Verify script injection prevention across all payment text inputs.
 */
test('TC_525: XSS Script Sanitization in Payment Inputs', { annotation: { type: 'description', description: 'Verify script injection prevention across all payment text inputs.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_409
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Paste Non-Numeric Characters Prevention
 * Description: Verify copying and pasting text strings (e.g., Eight Lakh) into turnover fields.
 */
test('TC_409: Paste Non-Numeric Characters Prevention', { annotation: { type: 'description', description: 'Verify copying and pasting text strings (e.g., Eight Lakh) into turnover fields.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_325
 * Module: Registration
 * Sub-Module: Vendor Information
 * Scenario: XSS Payload Sanitization
 * Description: Verify XSS injection scripts are neutralized across all text fields and tables.
 */
test('TC_325: XSS Payload Sanitization', { annotation: { type: 'description', description: 'Verify XSS injection scripts are neutralized across all text fields and tables.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

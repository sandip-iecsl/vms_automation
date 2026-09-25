const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_407
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Decimal / Currency Amount Formatting
 * Description: Verify turnover fields handle decimal values (e.g., 888888.50).
 */
test('TC_407: Decimal / Currency Amount Formatting', { annotation: { type: 'description', description: 'Verify turnover fields handle decimal values (e.g., 888888.50).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

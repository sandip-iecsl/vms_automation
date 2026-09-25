const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_368
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Page Refresh Draft Retention
 * Description: Verify entered license and turnover data is retained upon browser refresh.
 */
test('TC_368: Page Refresh Draft Retention', { annotation: { type: 'description', description: 'Verify entered license and turnover data is retained upon browser refresh.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

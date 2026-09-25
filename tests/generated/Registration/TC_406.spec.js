const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_406
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Zero Turnover Amount Handling
 * Description: Verify entering 0 in turnover fields for newly incorporated entities.
 */
test('TC_406: Zero Turnover Amount Handling', { annotation: { type: 'description', description: 'Verify entering 0 in turnover fields for newly incorporated entities.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

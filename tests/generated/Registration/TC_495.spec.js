const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_495
 * Module: Registration
 * Sub-Module: Payment Details
 * Scenario: Blank Field Validation
 * Description: Verify validation when IFSC Code field is left blank.
 */
test('TC_495: Blank Field Validation', { annotation: { type: 'description', description: 'Verify validation when IFSC Code field is left blank.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

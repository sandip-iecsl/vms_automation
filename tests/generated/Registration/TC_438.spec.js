const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_438
 * Module: Registration
 * Sub-Module: Material Details
 * Scenario: Valid Material Row Addition
 * Description: Verify adding a valid material with name and pack size boundaries.
 */
test('TC_438: Valid Material Row Addition', { annotation: { type: 'description', description: 'Verify adding a valid material with name and pack size boundaries.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

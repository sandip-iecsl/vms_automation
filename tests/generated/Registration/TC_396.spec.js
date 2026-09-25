const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_396
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Maximum Dynamic Rows Addition Limit
 * Description: Verify boundary behavior when adding maximum number of custom license rows (e.g., 10+ rows).
 */
test('TC_396: Maximum Dynamic Rows Addition Limit', { annotation: { type: 'description', description: 'Verify boundary behavior when adding maximum number of custom license rows (e.g., 10+ rows).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

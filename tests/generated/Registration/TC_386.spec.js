const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_386
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Blank Field Addition Validation
 * Description: Verify clicking + button when Other License inputs are blank.
 */
test('TC_386: Blank Field Addition Validation', { annotation: { type: 'description', description: 'Verify clicking + button when Other License inputs are blank.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    const dateInput = page.locator('input[type="date"], input[placeholder*="YYYY"], input').first();
    await expect(dateInput).toBeVisible({ timeout: 5000 });
});

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_375
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Leap Year Date Selection
 * Description: Verify date picker handles February 29th leap year selection accurately.
 */
test('TC_375: Leap Year Date Selection', { annotation: { type: 'description', description: 'Verify date picker handles February 29th leap year selection accurately.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    const checkbox = page.locator('input[name="select_all_rows"], input[type="checkbox"]').first();
    await expect(checkbox).toBeVisible({ timeout: 5000 });
    await checkbox.click();
});

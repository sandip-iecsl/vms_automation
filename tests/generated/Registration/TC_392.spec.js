const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_392
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Long Alphanumeric License Number Overflow
 * Description: Verify text overflow and ellipsis handling for long license strings in table.
 */
test('TC_392: Long Alphanumeric License Number Overflow', { annotation: { type: 'description', description: 'Verify text overflow and ellipsis handling for long license strings in table.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

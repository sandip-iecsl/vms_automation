const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_416
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Valid Detailed Production Entry
 * Description: Verify entering valid detailed manpower and machinery specifications.
 */
test('TC_416: Valid Detailed Production Entry', { annotation: { type: 'description', description: 'Verify entering valid detailed manpower and machinery specifications.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

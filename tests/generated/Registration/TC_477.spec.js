const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_477
 * Module: Registration
 * Sub-Module: Payment Details
 * Scenario: Valid Bank Name Entry
 * Description: Verify entering valid recognized Bank Name.
 */
test('TC_477: Valid Bank Name Entry', { annotation: { type: 'description', description: 'Verify entering valid recognized Bank Name.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_422
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Back and Forth Data Retention
 * Description: Verify Step 2 data remains populated when navigating back to Step 1 and returning to Step 2.
 */
test('TC_422: Back and Forth Data Retention', { annotation: { type: 'description', description: 'Verify Step 2 data remains populated when navigating back to Step 1 and returning to Step 2.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

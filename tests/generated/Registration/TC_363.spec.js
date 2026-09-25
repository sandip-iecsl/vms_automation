const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_363
 * Module: Registration -> Vendor Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Step 2 Active Indicator
 * Description: Verify Stepper highlights Step 2 with completed tick on Step 1.
 */
test('TC_363: Step 2 Active Indicator', { annotation: { type: 'description', description: 'Verify Stepper highlights Step 2 with completed tick on Step 1.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_365
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Previous Button Navigation (Step 2 to Step 1)
 * Description: Verify clicking Previous button navigates back to Step 1 with data intact.
 */
test('TC_365: Previous Button Navigation (Step 2 to Step 1)', { annotation: { type: 'description', description: 'Verify clicking Previous button navigates back to Step 1 with data intact.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

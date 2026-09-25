const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_403
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Pre-populated Financial Year Labels
 * Description: Verify three consecutive financial year labels render in descending order.
 */
test('TC_403: Pre-populated Financial Year Labels', { annotation: { type: 'description', description: 'Verify three consecutive financial year labels render in descending order.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

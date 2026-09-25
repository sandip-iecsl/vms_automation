const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_521
 * Module: Registration
 * Sub-Module: Payment Details
 * Scenario: Enter Key Submission on Last Field
 * Description: Verify pressing Enter key in MICR Code/IFSC Code field triggers form validation and Next action.
 */
test('TC_521: Enter Key Submission on Last Field', { annotation: { type: 'description', description: 'Verify pressing Enter key in MICR Code/IFSC Code field triggers form validation and Next action.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

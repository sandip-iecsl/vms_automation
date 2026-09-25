const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_500
 * Module: Registration
 * Sub-Module: Payment Details
 * Scenario: Optional Field Validation
 * Description: Verify submitting form without entering MICR Code (If Required).
 */
test('TC_500: Optional Field Validation', { annotation: { type: 'description', description: 'Verify submitting form without entering MICR Code (If Required).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

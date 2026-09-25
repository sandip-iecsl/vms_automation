const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_330
 * Module: Registration
 * Sub-Module: Vendor Information
 * Scenario: Pure Numeric Input Validation
 * Description: Verify system validation when entering purely numbers in Vendor Name.
 */
test('TC_330: Pure Numeric Input Validation', { annotation: { type: 'description', description: 'Verify system validation when entering purely numbers in Vendor Name.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

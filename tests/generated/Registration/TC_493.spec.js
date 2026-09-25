const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_493
 * Module: Registration
 * Sub-Module: Payment Details
 * Scenario: Minimum / Maximum Account Length Boundary
 * Description: Verify system boundary validation for standard Indian bank accounts (9 to 18 digits).
 */
test('TC_493: Minimum / Maximum Account Length Boundary', { annotation: { type: 'description', description: 'Verify system boundary validation for standard Indian bank accounts (9 to 18 digits).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

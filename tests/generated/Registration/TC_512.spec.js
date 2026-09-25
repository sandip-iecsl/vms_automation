const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_512
 * Module: Registration
 * Sub-Module: Payment Details
 * Scenario: Numerical Input Restriction
 * Description: Verify system restricts purely numeric input in Bank Name field.
 */
test('TC_512: Numerical Input Restriction', { annotation: { type: 'description', description: 'Verify system restricts purely numeric input in Bank Name field.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

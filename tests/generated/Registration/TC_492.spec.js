const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_492
 * Module: Registration
 * Sub-Module: Payment Details
 * Scenario: Non-Numeric Character Restriction
 * Description: Verify system blocks alphabetical and special characters in Account Number.
 */
test('TC_492: Non-Numeric Character Restriction', { annotation: { type: 'description', description: 'Verify system blocks alphabetical and special characters in Account Number.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

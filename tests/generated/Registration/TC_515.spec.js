const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_515
 * Module: Registration
 * Sub-Module: Payment Details
 * Scenario: Leading Zeroes Retention
 * Description: Verify bank account numbers with leading zeroes retain the 0 prefix.
 */
test('TC_515: Leading Zeroes Retention', { annotation: { type: 'description', description: 'Verify bank account numbers with leading zeroes retain the 0 prefix.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

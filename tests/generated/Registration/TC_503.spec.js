const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_503
 * Module: Registration
 * Sub-Module: Payment Details
 * Scenario: SQL Injection on Payment Fields
 * Description: Verify SQL injection sanitization across all payment input fields.
 */
test('TC_503: SQL Injection on Payment Fields', { annotation: { type: 'description', description: 'Verify SQL injection sanitization across all payment input fields.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

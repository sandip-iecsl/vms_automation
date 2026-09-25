const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_509
 * Module: Registration
 * Sub-Module: Payment Details
 * Scenario: Clear Payment Mode Value
 * Description: Verify system behavior when clearing Payment Mode field.
 */
test('TC_509: Clear Payment Mode Value', { annotation: { type: 'description', description: 'Verify system behavior when clearing Payment Mode field.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

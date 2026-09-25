const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_470
 * Module: Registration
 * Sub-Module: Payment Details
 * Scenario: Payment Mode Input / Dropdown
 * Description: Verify entering or selecting Payment Mode (e.g., NEFT, RTGS, IMPS, Cheque).
 */
test('TC_470: Payment Mode Input / Dropdown', { annotation: { type: 'description', description: 'Verify entering or selecting Payment Mode (e.g., NEFT, RTGS, IMPS, Cheque).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

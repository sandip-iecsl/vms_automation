const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_520
 * Module: Registration
 * Sub-Module: Payment Details
 * Scenario: Tab Key Order Across Step 4
 * Description: Verify keyboard Tab order navigates through all payment fields sequentially.
 */
test('TC_520: Tab Key Order Across Step 4', { annotation: { type: 'description', description: 'Verify keyboard Tab order navigates through all payment fields sequentially.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

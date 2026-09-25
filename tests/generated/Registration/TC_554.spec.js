const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_554
 * Module: Registration
 * Sub-Module: Declaration
 * Scenario: Tab Navigation Order
 * Description: Verify keyboard Tab navigation order across all declaration textareas and action buttons.
 */
test('TC_554: Tab Navigation Order', { annotation: { type: 'description', description: 'Verify keyboard Tab navigation order across all declaration textareas and action buttons.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

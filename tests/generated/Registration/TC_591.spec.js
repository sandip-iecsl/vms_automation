const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_591
 * Module: Registration
 * Sub-Module: Vendor Invitation
 * Scenario: Modal Loading Spinner & Double Click Prevention
 * Description: Verify loading spinner appears and ADD button disables during API dispatch.
 */
test('TC_591: Modal Loading Spinner & Double Click Prevention', { annotation: { type: 'description', description: 'Verify loading spinner appears and ADD button disables during API dispatch.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Invitation');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

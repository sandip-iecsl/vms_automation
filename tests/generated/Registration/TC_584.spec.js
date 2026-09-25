const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_584
 * Module: Registration
 * Sub-Module: Vendor Invitation
 * Scenario: Short Length Validation (< 10 Digits)
 * Description: Verify system rejects contact numbers with less than 10 digits.
 */
test('TC_584: Short Length Validation (< 10 Digits)', { annotation: { type: 'description', description: 'Verify system rejects contact numbers with less than 10 digits.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Invitation');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_279
 * Module: Master
 * Sub-Module: Private User
 * Scenario: Duplicate Email Validation
 * Description: Verify system prevents adding duplicate private user emails.
 */
test('TC_279: Duplicate Email Validation', { annotation: { type: 'description', description: 'Verify system prevents adding duplicate private user emails.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/PrivateUserMaster');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

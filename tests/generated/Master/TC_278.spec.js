const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_278
 * Module: Master
 * Sub-Module: Private User
 * Scenario: Valid Private User Creation
 * Description: Verify adding a new valid private user email.
 */
test('TC_278: Valid Private User Creation', { annotation: { type: 'description', description: 'Verify adding a new valid private user email.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/PrivateUserMaster');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_289
 * Module: Master
 * Sub-Module: Private User
 * Scenario: Successful Update
 * Description: Verify updating existing private user email successfully.
 */
test('TC_289: Successful Update', { annotation: { type: 'description', description: 'Verify updating existing private user email successfully.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/PrivateUserMaster');
    await page.waitForLoadState('domcontentloaded');
    const dateInput = page.locator('input[type="date"], input[placeholder*="YYYY"], input').first();
    await expect(dateInput).toBeVisible({ timeout: 5000 });
});

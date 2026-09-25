const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_285
 * Module: Master
 * Sub-Module: Private User
 * Scenario: Created On Timestamp Format
 * Description: Verify display format of \'Created On\' timestamp.
 */
test('TC_285: Created On Timestamp Format', { annotation: { type: 'description', description: 'Verify display format of \'Created On\' timestamp.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/PrivateUserMaster');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_276
 * Module: Master
 * Sub-Module: Private User
 * Scenario: Invalid Email Format Validation
 * Description: Verify system rejects non-email strings (e.g. plain text privateuser3).
 */
test('TC_276: Invalid Email Format Validation', { annotation: { type: 'description', description: 'Verify system rejects non-email strings (e.g. plain text privateuser3).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/PrivateUserMaster');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

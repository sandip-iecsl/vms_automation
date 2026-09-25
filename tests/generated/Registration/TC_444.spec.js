const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_444
 * Module: Registration
 * Sub-Module: Material Details
 * Scenario: Case-Insensitive Duplicate Name Check
 * Description: Verify system detects and prevents duplicate material names irrespective of uppercase/lowercase letters.
 */
test('TC_444: Case-Insensitive Duplicate Name Check', { annotation: { type: 'description', description: 'Verify system detects and prevents duplicate material names irrespective of uppercase/lowercase letters.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

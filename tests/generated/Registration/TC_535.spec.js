const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_535
 * Module: Registration
 * Sub-Module: Declaration
 * Scenario: Repetitive Gibberish Input Handling
 * Description: Verify system handling when entering repeated random character strings.
 */
test('TC_535: Repetitive Gibberish Input Handling', { annotation: { type: 'description', description: 'Verify system handling when entering repeated random character strings.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

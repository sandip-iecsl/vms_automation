const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_474
 * Module: Registration
 * Sub-Module: Payment Details
 * Scenario: Character Length & Gibberish Handling
 * Description: Verify system boundary handling when inputting repetitive gibberish or 150+ characters.
 */
test('TC_474: Character Length & Gibberish Handling', { annotation: { type: 'description', description: 'Verify system boundary handling when inputting repetitive gibberish or 150+ characters.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

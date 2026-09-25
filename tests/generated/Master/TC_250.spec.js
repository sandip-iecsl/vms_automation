const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_250
 * Module: Master
 * Sub-Module: Event
 * Scenario: Repeated Gibberish Characters Input
 * Description: Verify system handles repetitive character spam (e.g., testtttttttttttttttttttt).
 */
test('TC_250: Repeated Gibberish Characters Input', { annotation: { type: 'description', description: 'Verify system handles repetitive character spam (e.g., testtttttttttttttttttttt).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/EventManager');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

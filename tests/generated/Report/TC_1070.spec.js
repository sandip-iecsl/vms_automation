const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1070
 * Module: Report
 * Sub-Module: Business Card
 * Scenario: Logged-in Username Display
 * Description: Verify user profile name SANDIPAN TEST renders on top-right navbar.
 */
test('TC_1070: Logged-in Username Display', { annotation: { type: 'description', description: 'Verify user profile name SANDIPAN TEST renders on top-right navbar.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_Card');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

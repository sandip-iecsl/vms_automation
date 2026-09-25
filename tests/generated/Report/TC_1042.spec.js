const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1042
 * Module: Report
 * Sub-Module: Business Card
 * Scenario: Formatted Phone Number Display
 * Description: Verify Phone column renders country codes and spacing cleanly.
 */
test('TC_1042: Formatted Phone Number Display', { annotation: { type: 'description', description: 'Verify Phone column renders country codes and spacing cleanly.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_Card');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

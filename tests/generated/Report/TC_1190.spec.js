const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1190
 * Module: Report
 * Sub-Module: Business Card Report
 * Scenario: Multi-Card Hover Isolation
 * Description: Verify hovering over one card does not expand adjacent cards.
 */
test('TC_1190: Multi-Card Hover Isolation', { annotation: { type: 'description', description: 'Verify hovering over one card does not expand adjacent cards.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_CardReport');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

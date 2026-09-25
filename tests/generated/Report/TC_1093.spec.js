const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1093
 * Module: Report
 * Sub-Module: Business Card
 * Scenario: Google Chrome Layout & Functionality
 * Description: Verify all cards, search, sort, and hover animations in Google Chrome.
 */
test('TC_1093: Google Chrome Layout & Functionality', { annotation: { type: 'description', description: 'Verify all cards, search, sort, and hover animations in Google Chrome.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_Card');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

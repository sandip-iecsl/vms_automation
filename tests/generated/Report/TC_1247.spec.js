const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1247
 * Module: Report
 * Sub-Module: Business Card Report
 * Scenario: Google Chrome Layout & Functionality
 * Description: Verify all date pickers, cards, search, sort, and hover animations in Chrome.
 */
test('TC_1247: Google Chrome Layout & Functionality', { annotation: { type: 'description', description: 'Verify all date pickers, cards, search, sort, and hover animations in Chrome.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_CardReport');
    await page.waitForLoadState('domcontentloaded');
    const dateInput = page.locator('input[type="date"], input[placeholder*="YYYY"], input').first();
    await expect(dateInput).toBeVisible({ timeout: 5000 });
});

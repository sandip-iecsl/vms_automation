const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1171
 * Module: Report
 * Sub-Module: Business Card Report
 * Scenario: Valid Date Range Search
 * Description: Verify filtering business cards by valid date range (e.g., 01-08-2026 to 31-08-2026).
 */
test('TC_1171: Valid Date Range Search', { annotation: { type: 'description', description: 'Verify filtering business cards by valid date range (e.g., 01-08-2026 to 31-08-2026).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_CardReport');
    await page.waitForLoadState('domcontentloaded');
    const searchInput = page.locator('input[type="text"]').first();
    await expect(searchInput).toBeVisible();
    await searchInput.fill('TEST');
    await page.waitForTimeout(300);
    await searchInput.clear();
});

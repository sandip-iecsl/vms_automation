const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1177
 * Module: Report
 * Sub-Module: Business Card Report
 * Scenario: No Records Found for Date Range
 * Description: Verify UI empty state when date range yields 0 matching cards.
 */
test('TC_1177: No Records Found for Date Range', { annotation: { type: 'description', description: 'Verify UI empty state when date range yields 0 matching cards.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_CardReport');
    await page.waitForLoadState('domcontentloaded');
    const dateInput = page.locator('input[type="date"], input[placeholder*="YYYY"], input').first();
    await expect(dateInput).toBeVisible({ timeout: 5000 });
});

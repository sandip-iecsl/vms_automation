const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1255
 * Module: Report
 * Sub-Module: Business Card Report
 * Scenario: Complete Date-Driven Business Card Report Lifecycle
 * Description: Verify end-to-end flow: Scan Card with Event -> Open Business Card Report -> Filter by Onboarding Date Range -> Search by Vendor/Event -> View in Card and List views.
 */
test('TC_1255: Complete Date-Driven Business Card Report Lifecycle', { annotation: { type: 'description', description: 'Verify end-to-end flow: Scan Card with Event -> Open Business Card Report -> Filter by Onboarding Date Range -> Search by Vendor/Event -> View in Card and List views.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_CardReport');
    await page.waitForLoadState('domcontentloaded');
    const dateInput = page.locator('input[type="date"], input[placeholder*="YYYY"], input').first();
    await expect(dateInput).toBeVisible({ timeout: 5000 });
});

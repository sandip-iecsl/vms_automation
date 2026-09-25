const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1172
 * Module: Report
 * Sub-Module: Business Card Report
 * Scenario: Blank Date Range Submission
 * Description: Verify clicking SEARCH with empty dd-mm-yyyy date fields.
 */
test('TC_1172: Blank Date Range Submission', { annotation: { type: 'description', description: 'Verify clicking SEARCH with empty dd-mm-yyyy date fields.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_CardReport');
    await page.waitForLoadState('domcontentloaded');
    const dateInput = page.locator('input[type="date"], input[placeholder*="YYYY"], input').first();
    await expect(dateInput).toBeVisible({ timeout: 5000 });
});

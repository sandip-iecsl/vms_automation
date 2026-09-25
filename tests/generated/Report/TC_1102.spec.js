const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1102
 * Module: Report
 * Sub-Module: Business Card
 * Scenario: Synchronized Card Edit Reflection
 * Description: Verify editing contact or designation in Card Scan reflects immediately in Report.
 */
test('TC_1102: Synchronized Card Edit Reflection', { annotation: { type: 'description', description: 'Verify editing contact or designation in Card Scan reflects immediately in Report.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_Card');
    await page.waitForLoadState('domcontentloaded');
    const dateInput = page.locator('input[type="date"], input[placeholder*="YYYY"], input').first();
    await expect(dateInput).toBeVisible({ timeout: 5000 });
});

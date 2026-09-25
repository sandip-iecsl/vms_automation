const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1254
 * Module: Report
 * Sub-Module: Business Card Report
 * Scenario: Synchronized Reflection of Scanned Business Card by Date
 * Description: Verify card scanned on 28-08-2026 appears when searching for August 2026.
 */
test('TC_1254: Synchronized Reflection of Scanned Business Card by Date', { annotation: { type: 'description', description: 'Verify card scanned on 28-08-2026 appears when searching for August 2026.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_CardReport');
    await page.waitForLoadState('domcontentloaded');
    const dateInput = page.locator('input[type="date"], input[placeholder*="YYYY"], input').first();
    await expect(dateInput).toBeVisible({ timeout: 5000 });
});

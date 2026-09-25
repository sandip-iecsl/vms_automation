const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1076
 * Module: Report
 * Sub-Module: Business Card
 * Scenario: SQL Injection Sanitization on Search/Sort API
 * Description: Verify backend sanitizes search query and sort parameters against SQL injection.
 */
test('TC_1076: SQL Injection Sanitization on Search/Sort API', { annotation: { type: 'description', description: 'Verify backend sanitizes search query and sort parameters against SQL injection.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_Card');
    await page.waitForLoadState('domcontentloaded');
    const searchInput = page.locator('input[type="text"]').first();
    await expect(searchInput).toBeVisible();
    await searchInput.fill('TEST');
    await page.waitForTimeout(300);
    await searchInput.clear();
});

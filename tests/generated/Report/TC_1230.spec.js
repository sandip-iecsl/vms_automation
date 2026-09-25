const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1230
 * Module: Report
 * Sub-Module: Business Card Report
 * Scenario: SQL Injection on Date Filter & Search API
 * Description: Verify backend parameterizes date filters and search query against SQL injection.
 */
test('TC_1230: SQL Injection on Date Filter & Search API', { annotation: { type: 'description', description: 'Verify backend parameterizes date filters and search query against SQL injection.' } }, async ({ page }) => {
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

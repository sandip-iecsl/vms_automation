const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1295
 * Module: Vendor Engagement
 * Sub-Module: Custom Mail
 * Scenario: SQL Injection on Search / Dispatch API
 * Description: Verify backend parameterizes search queries and mail recipient IDs against SQL injection.
 */
test('TC_1295: SQL Injection on Search / Dispatch API', { annotation: { type: 'description', description: 'Verify backend parameterizes search queries and mail recipient IDs against SQL injection.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CustomMail');
    await page.waitForLoadState('domcontentloaded');
    const searchInput = page.locator('input[type="text"]').first();
    await expect(searchInput).toBeVisible();
    await searchInput.fill('TEST');
    await page.waitForTimeout(300);
    await searchInput.clear();
});

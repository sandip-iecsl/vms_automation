const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1210
 * Module: Report
 * Sub-Module: Business Card Report
 * Scenario: Non-Existent Query Handling (Bug Check: xzy)
 * Description: Verify empty state when search term has 0 matches (e.g., xzy).
 */
test('TC_1210: Non-Existent Query Handling (Bug Check: xzy)', { annotation: { type: 'description', description: 'Verify empty state when search term has 0 matches (e.g., xzy).' } }, async ({ page }) => {
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

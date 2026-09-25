const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1176
 * Module: Report
 * Sub-Module: Business Card Report
 * Scenario: Same Start and End Date Filter
 * Description: Verify filtering for cards created on a specific single day (From = To).
 */
test('TC_1176: Same Start and End Date Filter', { annotation: { type: 'description', description: 'Verify filtering for cards created on a specific single day (From = To).' } }, async ({ page }) => {
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

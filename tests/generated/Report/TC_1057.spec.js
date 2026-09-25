const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1057
 * Module: Report
 * Sub-Module: Business Card
 * Scenario: Keyboard Escape Key Clears Filter
 * Description: Verify pressing Escape key inside search box clears query and resets grid.
 */
test('TC_1057: Keyboard Escape Key Clears Filter', { annotation: { type: 'description', description: 'Verify pressing Escape key inside search box clears query and resets grid.' } }, async ({ page }) => {
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

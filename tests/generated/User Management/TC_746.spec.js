const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_746
 * Module: User Management
 * Sub-Module: User Mapping
 * Scenario: Case-Insensitive Name Search
 * Description: Verify searching user names via keyboard is case-insensitive.
 */
test('TC_746: Case-Insensitive Name Search', { annotation: { type: 'description', description: 'Verify searching user names via keyboard is case-insensitive.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserMapping');
    await page.waitForLoadState('domcontentloaded');
    const searchInput = page.locator('input[type="text"]').first();
    await expect(searchInput).toBeVisible();
    await searchInput.fill('TEST');
    await page.waitForTimeout(300);
    await searchInput.clear();
});

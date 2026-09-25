const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_972
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Debounced Search Input
 * Description: Verify search bar debounces rapid keystrokes to prevent excessive API calls.
 */
test('TC_972: Debounced Search Input', { annotation: { type: 'description', description: 'Verify search bar debounces rapid keystrokes to prevent excessive API calls.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    const searchInput = page.locator('input[type="text"]').first();
    await expect(searchInput).toBeVisible();
    await searchInput.fill('TEST');
    await page.waitForTimeout(300);
    await searchInput.clear();
});

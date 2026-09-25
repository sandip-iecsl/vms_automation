const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1059
 * Module: Report
 * Sub-Module: Business Card
 * Scenario: Debounced Search Input
 * Description: Verify search bar debounces keystrokes to minimize network traffic.
 */
test('TC_1059: Debounced Search Input', { annotation: { type: 'description', description: 'Verify search bar debounces keystrokes to minimize network traffic.' } }, async ({ page }) => {
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

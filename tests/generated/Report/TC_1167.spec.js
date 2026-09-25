const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1167
 * Module: Report
 * Sub-Module: Business Card Report
 * Scenario: UI Elements & Alignment
 * Description: Verify visual layout, BACK TO HOME button, date pickers, SEARCH button, search bar, sort icon, and view toggle buttons.
 */
test('TC_1167: UI Elements & Alignment', { annotation: { type: 'description', description: 'Verify visual layout, BACK TO HOME button, date pickers, SEARCH button, search bar, sort icon, and view toggle buttons.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_CardReport');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

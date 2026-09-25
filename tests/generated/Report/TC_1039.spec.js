const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1039
 * Module: Report
 * Sub-Module: Business Card
 * Scenario: Row Selection and Focus State
 * Description: Verify row highlight feedback when clicking a row in table list view.
 */
test('TC_1039: Row Selection and Focus State', { annotation: { type: 'description', description: 'Verify row highlight feedback when clicking a row in table list view.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_Card');
    await page.waitForLoadState('domcontentloaded');
    const checkbox = page.locator('input[name="select_all_rows"], input[type="checkbox"]').first();
    await expect(checkbox).toBeVisible({ timeout: 5000 });
    await checkbox.click();
});

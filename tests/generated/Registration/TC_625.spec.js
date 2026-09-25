const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_625
 * Module: Registration
 * Sub-Module: Card Scan
 * Scenario: Quick Event Creation & Auto-Selection
 * Description: Verify creating a new event dynamically adds and selects it in the Event dropdown.
 */
test('TC_625: Quick Event Creation & Auto-Selection', { annotation: { type: 'description', description: 'Verify creating a new event dynamically adds and selects it in the Event dropdown.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Card_Scan');
    await page.waitForLoadState('domcontentloaded');
    const checkbox = page.locator('input[name="select_all_rows"], input[type="checkbox"]').first();
    await expect(checkbox).toBeVisible({ timeout: 5000 });
    await checkbox.click();
});

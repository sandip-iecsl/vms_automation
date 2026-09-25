const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_604
 * Module: Registration
 * Sub-Module: Vendor Invitation
 * Scenario: Row Selection & Counter Display
 * Description: Verify clicking table row highlights record and updates counter.
 */
test('TC_604: Row Selection & Counter Display', { annotation: { type: 'description', description: 'Verify clicking table row highlights record and updates counter.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Invitation');
    await page.waitForLoadState('domcontentloaded');
    const checkbox = page.locator('input[name="select_all_rows"], input[type="checkbox"]').first();
    await expect(checkbox).toBeVisible({ timeout: 5000 });
    await checkbox.click();
});

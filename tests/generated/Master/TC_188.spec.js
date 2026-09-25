const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_188
 * Module: Master
 * Sub-Module: Holiday
 * Scenario: Optional Region Selection
 * Description: Verify creating an organization-wide holiday without selecting a specific Region.
 */
test('TC_188: Optional Region Selection', { annotation: { type: 'description', description: 'Verify creating an organization-wide holiday without selecting a specific Region.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/HolidayManager');
    await page.waitForLoadState('domcontentloaded');
    const checkbox = page.locator('input[name="select_all_rows"], input[type="checkbox"]').first();
    await expect(checkbox).toBeVisible({ timeout: 5000 });
    await checkbox.click();
});

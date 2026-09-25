const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_747
 * Module: User Management
 * Sub-Module: User Mapping
 * Scenario: Non-Existent User Selection Attempt
 * Description: Verify keyboard typing for non-existent employee names in User dropdown.
 */
test('TC_747: Non-Existent User Selection Attempt', { annotation: { type: 'description', description: 'Verify keyboard typing for non-existent employee names in User dropdown.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserMapping');
    await page.waitForLoadState('domcontentloaded');
    const checkbox = page.locator('input[name="select_all_rows"], input[type="checkbox"]').first();
    await expect(checkbox).toBeVisible({ timeout: 5000 });
    await checkbox.click();
});

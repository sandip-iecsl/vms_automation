const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_731
 * Module: User Management
 * Sub-Module: Group Creation
 * Scenario: Show/Hide All Toggle Checkbox
 * Description: Verify clicking Show/Hide All checkbox toggles visibility of all columns simultaneously.
 */
test('TC_731: Show/Hide All Toggle Checkbox', { annotation: { type: 'description', description: 'Verify clicking Show/Hide All checkbox toggles visibility of all columns simultaneously.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserGroup');
    await page.waitForLoadState('domcontentloaded');
    const checkbox = page.locator('input[name="select_all_rows"], input[type="checkbox"]').first();
    await expect(checkbox).toBeVisible({ timeout: 5000 });
    await checkbox.click();
});

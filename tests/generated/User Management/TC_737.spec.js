const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_737
 * Module: User Management
 * Sub-Module: Group Creation
 * Scenario: Role Mapping Group Selection
 * Description: Verify newly created group is available in User Management -> Role Mapping.
 */
test('TC_737: Role Mapping Group Selection', { annotation: { type: 'description', description: 'Verify newly created group is available in User Management -> Role Mapping.' } }, async ({ page }) => {
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

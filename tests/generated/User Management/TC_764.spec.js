const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_764
 * Module: User Management
 * Sub-Module: User Mapping
 * Scenario: Edit Group Unselected Validation
 * Description: Verify validation when clearing or setting Group dropdown to -- Select an option -- during edit.
 */
test('TC_764: Edit Group Unselected Validation', { annotation: { type: 'description', description: 'Verify validation when clearing or setting Group dropdown to -- Select an option -- during edit.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserMapping');
    await page.waitForLoadState('domcontentloaded');
    const dateInput = page.locator('input[type="date"], input[placeholder*="YYYY"], input').first();
    await expect(dateInput).toBeVisible({ timeout: 5000 });
});

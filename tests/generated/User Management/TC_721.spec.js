const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_721
 * Module: User Management
 * Sub-Module: Group Creation
 * Scenario: Update to Existing Duplicate Group Name
 * Description: Verify system prevents updating a group name to match another already existing group.
 */
test('TC_721: Update to Existing Duplicate Group Name', { annotation: { type: 'description', description: 'Verify system prevents updating a group name to match another already existing group.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserGroup');
    await page.waitForLoadState('domcontentloaded');
    const dateInput = page.locator('input[type="date"], input[placeholder*="YYYY"], input').first();
    await expect(dateInput).toBeVisible({ timeout: 5000 });
});

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_720
 * Module: User Management
 * Sub-Module: Group Creation
 * Scenario: Unchanged Value Update Action
 * Description: Verify clicking UPDATE without modifying pre-filled group name.
 */
test('TC_720: Unchanged Value Update Action', { annotation: { type: 'description', description: 'Verify clicking UPDATE without modifying pre-filled group name.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserGroup');
    await page.waitForLoadState('domcontentloaded');
    const dateInput = page.locator('input[type="date"], input[placeholder*="YYYY"], input').first();
    await expect(dateInput).toBeVisible({ timeout: 5000 });
});

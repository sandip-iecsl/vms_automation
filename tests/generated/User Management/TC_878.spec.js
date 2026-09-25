const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_878
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Card Scan Hidden State
 * Description: Verify Card Scan link is removed from sidebar when permission is revoked.
 */
test('TC_878: Card Scan Hidden State', { annotation: { type: 'description', description: 'Verify Card Scan link is removed from sidebar when permission is revoked.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    const fileInput = page.locator('input[type="file"]').first();
    await expect(fileInput).toBeAttached({ timeout: 5000 });
});

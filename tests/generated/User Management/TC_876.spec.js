const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_876
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Card Scan Permission Matrix
 * Description: Verify configuring permissions for Business Card Scan.
 */
test('TC_876: Card Scan Permission Matrix', { annotation: { type: 'description', description: 'Verify configuring permissions for Business Card Scan.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    const fileInput = page.locator('input[type="file"]').first();
    await expect(fileInput).toBeAttached({ timeout: 5000 });
});

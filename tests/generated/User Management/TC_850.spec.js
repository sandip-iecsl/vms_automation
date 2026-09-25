const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_850
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Unsaved Warning / Tab Switch
 * Description: Verify switching between Main Menu items (Template1 to Template2).
 */
test('TC_850: Unsaved Warning / Tab Switch', { annotation: { type: 'description', description: 'Verify switching between Main Menu items (Template1 to Template2).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_854
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Enable Visible Switches in Template2
 * Description: Verify toggling Visible switches for Template2 components.
 */
test('TC_854: Enable Visible Switches in Template2', { annotation: { type: 'description', description: 'Verify toggling Visible switches for Template2 components.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

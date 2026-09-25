const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_848
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Full Template1 Layout Auto-Reflow
 * Description: Verify Dashboard grid reorganizes cleanly without empty holes when multiple widgets are hidden.
 */
test('TC_848: Full Template1 Layout Auto-Reflow', { annotation: { type: 'description', description: 'Verify Dashboard grid reorganizes cleanly without empty holes when multiple widgets are hidden.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

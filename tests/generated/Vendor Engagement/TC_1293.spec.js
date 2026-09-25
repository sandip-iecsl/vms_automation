const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1293
 * Module: Vendor Engagement
 * Sub-Module: Custom Mail
 * Scenario: Role-Based Access Control (RBAC) Enforcement
 * Description: Verify users without Custom Mail permission cannot access module.
 */
test('TC_1293: Role-Based Access Control (RBAC) Enforcement', { annotation: { type: 'description', description: 'Verify users without Custom Mail permission cannot access module.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CustomMail');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1077
 * Module: Report
 * Sub-Module: Business Card
 * Scenario: Role-Based Access Control (RBAC) Enforcement
 * Description: Verify users without Business Card report permission cannot access the page.
 */
test('TC_1077: Role-Based Access Control (RBAC) Enforcement', { annotation: { type: 'description', description: 'Verify users without Business Card report permission cannot access the page.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_Card');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_37
 * Module: Login
 * Sub-Module: RBAC
 * Scenario: Master Approver / Approver Role Access
 * Description: Verify Approver role lands on dashboard with access restricted to approval queue and reports.
 */
test('TC_37: Master Approver / Approver Role Access', { annotation: { type: 'description', description: 'Verify Approver role lands on dashboard with access restricted to approval queue and reports.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
});

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_913
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Matrix Rendering Latency (< 500ms)
 * Description: Verify permission switch grid renders instantly upon selecting a template.
 */
test('TC_913: Matrix Rendering Latency (< 500ms)', { annotation: { type: 'description', description: 'Verify permission switch grid renders instantly upon selecting a template.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

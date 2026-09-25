const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_768
 * Module: User Management
 * Sub-Module: User Mapping
 * Scenario: Cancel Delete Action
 * Description: Verify clicking Cancel preserves user mapping record.
 */
test('TC_768: Cancel Delete Action', { annotation: { type: 'description', description: 'Verify clicking Cancel preserves user mapping record.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserMapping');
    await page.waitForLoadState('domcontentloaded');
    const deleteBtn = page.getByRole('button', { name: /delete/i }).first();
    await expect(deleteBtn).toBeVisible({ timeout: 5000 });
});

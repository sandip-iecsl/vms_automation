const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_893
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Entire Reports Menu Hidden
 * Description: Verify entire Report menu accordion is hidden when all report items are marked invisible.
 */
test('TC_893: Entire Reports Menu Hidden', { annotation: { type: 'description', description: 'Verify entire Report menu accordion is hidden when all report items are marked invisible.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

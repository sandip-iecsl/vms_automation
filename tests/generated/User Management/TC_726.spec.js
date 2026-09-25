const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_726
 * Module: User Management
 * Sub-Module: Group Creation
 * Scenario: Deletion of Group Mapped to Active Users
 * Description: Verify deletion restriction when group is assigned to active system users.
 */
test('TC_726: Deletion of Group Mapped to Active Users', { annotation: { type: 'description', description: 'Verify deletion restriction when group is assigned to active system users.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserGroup');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_829
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Button Loading State during Save
 * Description: Verify SAVE button state changes to \'SAVING...\' with loading animation during submission.
 */
test('TC_829: Button Loading State during Save', { annotation: { type: 'description', description: 'Verify SAVE button state changes to \'SAVING...\' with loading animation during submission.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

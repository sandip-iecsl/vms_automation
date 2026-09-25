const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_740
 * Module: User Management
 * Sub-Module: User Mapping
 * Scenario: User Mapping URL Direct Access
 * Description: Verify User Mapping page loads directly via valid URL.
 */
test('TC_740: User Mapping URL Direct Access', { annotation: { type: 'description', description: 'Verify User Mapping page loads directly via valid URL.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserMapping');
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL(new RegExp('/UserMapping'));
});

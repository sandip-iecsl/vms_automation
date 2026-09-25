const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_688
 * Module: User Management
 * Sub-Module: Group Creation
 * Scenario: Group Creation URL Direct Access
 * Description: Verify Group Creation page loads directly via valid URL.
 */
test('TC_688: Group Creation URL Direct Access', { annotation: { type: 'description', description: 'Verify Group Creation page loads directly via valid URL.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserGroup');
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL(new RegExp('/UserGroup'));
});

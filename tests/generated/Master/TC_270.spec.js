const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_270
 * Module: Master
 * Sub-Module: Private User
 * Scenario: Private User Master URL Access
 * Description: Verify Private User Master page loads directly via valid URL.
 */
test('TC_270: Private User Master URL Access', { annotation: { type: 'description', description: 'Verify Private User Master page loads directly via valid URL.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/PrivateUserMaster');
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL(new RegExp('/PrivateUserMaster'));
});

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1166
 * Module: Report
 * Sub-Module: Business Card Report
 * Scenario: Direct URL Access
 * Description: Verify Business Card Report page loads directly via valid URL.
 */
test('TC_1166: Direct URL Access', { annotation: { type: 'description', description: 'Verify Business Card Report page loads directly via valid URL.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_CardReport');
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL(new RegExp('/Business_CardReport'));
});

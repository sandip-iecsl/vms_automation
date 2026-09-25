const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1256
 * Module: Vendor Engagement
 * Sub-Module: Custom Mail
 * Scenario: Direct URL Navigation
 * Description: Verify Custom Mail page loads directly via valid URL.
 */
test('TC_1256: Direct URL Navigation', { annotation: { type: 'description', description: 'Verify Custom Mail page loads directly via valid URL.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CustomMail');
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL(new RegExp('/CustomMail'));
});

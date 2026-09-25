const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_619
 * Module: Registration
 * Sub-Module: Card Scan
 * Scenario: Card Scan Direct URL Access
 * Description: Verify Card Scan page loads directly via valid URL.
 */
test('TC_619: Card Scan Direct URL Access', { annotation: { type: 'description', description: 'Verify Card Scan page loads directly via valid URL.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Card_Scan');
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL(new RegExp('/Card_Scan'));
});

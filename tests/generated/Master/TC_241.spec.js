const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_241
 * Module: Master
 * Sub-Module: Event
 * Scenario: Event Manager URL Access
 * Description: Verify Event Manager page loads directly via valid URL.
 */
test('TC_241: Event Manager URL Access', { annotation: { type: 'description', description: 'Verify Event Manager page loads directly via valid URL.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/EventManager');
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL(new RegExp('/EventManager'));
});

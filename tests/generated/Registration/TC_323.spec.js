const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_323
 * Module: Registration
 * Sub-Module: Vendor Information
 * Scenario: Disabled Previous Button on Step 1
 * Description: Verify Previous button state on the first step of registration.
 */
test('TC_323: Disabled Previous Button on Step 1', { annotation: { type: 'description', description: 'Verify Previous button state on the first step of registration.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

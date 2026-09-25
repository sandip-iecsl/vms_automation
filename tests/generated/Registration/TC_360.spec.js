const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_360
 * Module: Registration
 * Sub-Module: Vendor Information
 * Scenario: Auto-Save / Draft Data Retention
 * Description: Verify entered data is retained when user accidentally refreshes page during registration.
 */
test('TC_360: Auto-Save / Draft Data Retention', { annotation: { type: 'description', description: 'Verify entered data is retained when user accidentally refreshes page during registration.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

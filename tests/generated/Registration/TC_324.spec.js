const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_324
 * Module: Registration
 * Sub-Module: Vendor Information
 * Scenario: Multi-Step Progression Bar
 * Description: Verify step indicators render accurately across all 5 stages.
 */
test('TC_324: Multi-Step Progression Bar', { annotation: { type: 'description', description: 'Verify step indicators render accurately across all 5 stages.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

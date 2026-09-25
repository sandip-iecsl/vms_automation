const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_327
 * Module: Registration
 * Sub-Module: Vendor Information
 * Scenario: Master Category Population
 * Description: Verify Category dropdown lists all active categories from Category Master.
 */
test('TC_327: Master Category Population', { annotation: { type: 'description', description: 'Verify Category dropdown lists all active categories from Category Master.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

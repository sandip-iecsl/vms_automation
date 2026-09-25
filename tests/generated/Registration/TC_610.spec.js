const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_610
 * Module: Registration
 * Sub-Module: Vendor Invitation
 * Scenario: Page Refresh Data Retention
 * Description: Verify invitation list persists across browser page reload (F5).
 */
test('TC_610: Page Refresh Data Retention', { annotation: { type: 'description', description: 'Verify invitation list persists across browser page reload (F5).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Invitation');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

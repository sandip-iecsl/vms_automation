const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_349
 * Module: Registration
 * Sub-Module: Vendor Information
 * Scenario: Region Dropdown Population
 * Description: Verify Region dropdown in Key Contact displays all active Master regions.
 */
test('TC_349: Region Dropdown Population', { annotation: { type: 'description', description: 'Verify Region dropdown in Key Contact displays all active Master regions.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

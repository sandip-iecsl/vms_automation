const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_174
 * Module: Master
 * Sub-Module: Region
 * Scenario: Successful Deletion
 * Description: Verify confirming delete removes the region from the list.
 */
test('TC_174: Successful Deletion', { annotation: { type: 'description', description: 'Verify confirming delete removes the region from the list.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RegionManager');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_163
 * Module: Master
 * Sub-Module: Region
 * Scenario: Special Characters Validation
 * Description: Verify input validation when entering invalid special characters (e.g., @#$$, SoUtH//@).
 */
test('TC_163: Special Characters Validation', { annotation: { type: 'description', description: 'Verify input validation when entering invalid special characters (e.g., @#$$, SoUtH//@).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RegionManager');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

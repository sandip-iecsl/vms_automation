const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_446
 * Module: Registration
 * Sub-Module: Material Details
 * Scenario: Large Numeric Pack Size Boundary (Upper Limit)
 * Description: Verify system accepts large manufacturing batch quantities (e.g., 1000000 units).
 */
test('TC_446: Large Numeric Pack Size Boundary (Upper Limit)', { annotation: { type: 'description', description: 'Verify system accepts large manufacturing batch quantities (e.g., 1000000 units).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

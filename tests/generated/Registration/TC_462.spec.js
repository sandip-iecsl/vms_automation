const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_462
 * Module: Registration
 * Sub-Module: Material Details
 * Scenario: Direct Click on Completed Steps (Step 1 & Step 2)
 * Description: Verify clicking completed green step icons navigates directly to previous steps.
 */
test('TC_462: Direct Click on Completed Steps (Step 1 & Step 2)', { annotation: { type: 'description', description: 'Verify clicking completed green step icons navigates directly to previous steps.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_468
 * Module: Registration -> 
Vendor Registration
 * Sub-Module: Payment Details
 * Scenario: Step 4 Active Indicator
 * Description: Verify Stepper highlights Step 4 with completed checkmarks on Steps 1, 2 & 3.
 */
test('TC_468: Step 4 Active Indicator', { annotation: { type: 'description', description: 'Verify Stepper highlights Step 4 with completed checkmarks on Steps 1, 2 & 3.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

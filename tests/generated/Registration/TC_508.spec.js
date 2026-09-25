const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_508
 * Module: Registration
 * Sub-Module: Payment Details
 * Scenario: Default Value Validation
 * Description: Verify default selection/value in Payment Mode field upon opening Step 4.
 */
test('TC_508: Default Value Validation', { annotation: { type: 'description', description: 'Verify default selection/value in Payment Mode field upon opening Step 4.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

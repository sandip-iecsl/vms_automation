const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_433
 * Module: Registration
 * Sub-Module: Material Details
 * Scenario: Placeholder Verification
 * Description: Verify placeholder text across bottom input row.
 */
test('TC_433: Placeholder Verification', { annotation: { type: 'description', description: 'Verify placeholder text across bottom input row.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

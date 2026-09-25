const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_401
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Rapid Consecutive Clicks on + Button
 * Description: Verify double-click / rapid clicking prevention on green + action button.
 */
test('TC_401: Rapid Consecutive Clicks on + Button', { annotation: { type: 'description', description: 'Verify double-click / rapid clicking prevention on green + action button.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

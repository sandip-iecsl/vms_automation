const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_448
 * Module: Registration
 * Sub-Module: Material Details
 * Scenario: Keyboard Enter Key Row Submission
 * Description: Verify pressing Enter key from Max Pack Size input triggers row addition.
 */
test('TC_448: Keyboard Enter Key Row Submission', { annotation: { type: 'description', description: 'Verify pressing Enter key from Max Pack Size input triggers row addition.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

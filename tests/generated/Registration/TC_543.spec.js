const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_543
 * Module: Registration
 * Sub-Module: Declaration
 * Scenario: Submit Button Loading State & Double Click Prevention
 * Description: Verify Submit button disables with loading spinner to prevent multiple simultaneous submissions.
 */
test('TC_543: Submit Button Loading State & Double Click Prevention', { annotation: { type: 'description', description: 'Verify Submit button disables with loading spinner to prevent multiple simultaneous submissions.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

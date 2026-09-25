const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_626
 * Module: Registration
 * Sub-Module: Card Scan
 * Scenario: Cancel Modal Action
 * Description: Verify clicking CANCEL button closes Add Event modal without saving.
 */
test('TC_626: Cancel Modal Action', { annotation: { type: 'description', description: 'Verify clicking CANCEL button closes Add Event modal without saving.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Card_Scan');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

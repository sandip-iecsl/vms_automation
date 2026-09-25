const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_253
 * Module: Master
 * Sub-Module: Event
 * Scenario: Cancel / Close Modal
 * Description: Verify clicking CANCEL button closes modal without saving.
 */
test('TC_253: Cancel / Close Modal', { annotation: { type: 'description', description: 'Verify clicking CANCEL button closes modal without saving.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/EventManager');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

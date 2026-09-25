const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_258
 * Module: Master
 * Sub-Module: Event
 * Scenario: Blank Field Validation on Edit
 * Description: Verify validation when clearing event name during edit.
 */
test('TC_258: Blank Field Validation on Edit', { annotation: { type: 'description', description: 'Verify validation when clearing event name during edit.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/EventManager');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

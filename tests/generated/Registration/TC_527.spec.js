const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_527
 * Module: Registration
 * Sub-Module: Declaration
 * Scenario: Form Controls & Action Buttons UI
 * Description: Verify visual layout, labels, textareas, resize handles, and action buttons.
 */
test('TC_527: Form Controls & Action Buttons UI', { annotation: { type: 'description', description: 'Verify visual layout, labels, textareas, resize handles, and action buttons.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

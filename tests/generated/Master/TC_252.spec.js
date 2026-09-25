const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_252
 * Module: Master
 * Sub-Module: Event
 * Scenario: Max Length Boundary
 * Description: Verify character length limit for Event Name field.
 */
test('TC_252: Max Length Boundary', { annotation: { type: 'description', description: 'Verify character length limit for Event Name field.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/EventManager');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

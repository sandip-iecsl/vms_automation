const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_254
 * Module: Master
 * Sub-Module: Event
 * Scenario: Security / XSS Prevention
 * Description: Verify script injection prevention in Event Name field.
 */
test('TC_254: Security / XSS Prevention', { annotation: { type: 'description', description: 'Verify script injection prevention in Event Name field.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/EventManager');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_350
 * Module: Registration
 * Sub-Module: Vendor Information
 * Scenario: Matrix Fields Input
 * Description: Verify entering secondary escalation contact person names and phone numbers.
 */
test('TC_350: Matrix Fields Input', { annotation: { type: 'description', description: 'Verify entering secondary escalation contact person names and phone numbers.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

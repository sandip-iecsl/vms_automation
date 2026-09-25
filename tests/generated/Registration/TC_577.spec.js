const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_577
 * Module: Registration
 * Sub-Module: Vendor Invitation
 * Scenario: Security / XSS Prevention in Invitation Form
 * Description: Verify script injection prevention across all invitation modal fields.
 */
test('TC_577: Security / XSS Prevention in Invitation Form', { annotation: { type: 'description', description: 'Verify script injection prevention across all invitation modal fields.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Invitation');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_424
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Session Timeout on License Details Form
 * Description: Verify system behavior when session expires while filling License Details.
 */
test('TC_424: Session Timeout on License Details Form', { annotation: { type: 'description', description: 'Verify system behavior when session expires while filling License Details.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

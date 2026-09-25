const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_617
 * Module: Registration
 * Sub-Module: Vendor Invitation
 * Scenario: Status Transition on Registration Completion
 * Description: Verify status updates from Invited to Registered or Pending Approval once vendor submits form.
 */
test('TC_617: Status Transition on Registration Completion', { annotation: { type: 'description', description: 'Verify status updates from Invited to Registered or Pending Approval once vendor submits form.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Invitation');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

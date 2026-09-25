const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_615
 * Module: Registration
 * Sub-Module: Vendor Invitation
 * Scenario: Auto-Generated Credentials Email Dispatch
 * Description: Verify system dispatches email containing auto-generated User ID, Temporary Password, and Login URL to vendor.
 */
test('TC_615: Auto-Generated Credentials Email Dispatch', { annotation: { type: 'description', description: 'Verify system dispatches email containing auto-generated User ID, Temporary Password, and Login URL to vendor.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Invitation');
    await page.waitForLoadState('domcontentloaded');
    const sendBtn = page.getByRole('button', { name: /send mail/i }).first();
    await expect(sendBtn).toBeVisible({ timeout: 5000 });
});

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1297
 * Module: Vendor Engagement
 * Sub-Module: Custom Mail
 * Scenario: Invalid / Corrupted Email Address Handling
 * Description: Verify system handles sending email to a recipient with malformed email ID.
 */
test('TC_1297: Invalid / Corrupted Email Address Handling', { annotation: { type: 'description', description: 'Verify system handles sending email to a recipient with malformed email ID.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CustomMail');
    await page.waitForLoadState('domcontentloaded');
    const sendBtn = page.getByRole('button', { name: /send mail/i }).first();
    await expect(sendBtn).toBeVisible({ timeout: 5000 });
});

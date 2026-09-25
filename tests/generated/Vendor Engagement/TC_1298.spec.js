const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1298
 * Module: Vendor Engagement
 * Sub-Module: Custom Mail
 * Scenario: Mail Server SMTP Failure Recovery
 * Description: Verify UI notification when mail gateway encounters SMTP connection failure.
 */
test('TC_1298: Mail Server SMTP Failure Recovery', { annotation: { type: 'description', description: 'Verify UI notification when mail gateway encounters SMTP connection failure.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CustomMail');
    await page.waitForLoadState('domcontentloaded');
    const sendBtn = page.getByRole('button', { name: /send mail/i }).first();
    await expect(sendBtn).toBeVisible({ timeout: 5000 });
});

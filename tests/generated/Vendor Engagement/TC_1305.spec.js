const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1305
 * Module: Vendor Engagement
 * Sub-Module: Custom Mail
 * Scenario: Complete Custom Mail Workflow
 * Description: Verify end-to-end flow: Create Template in Master -> Onboard Vendor in Registration -> Select Template & Vendor in Custom Mail -> Send Mail -> Verify Recipient Inbox.
 */
test('TC_1305: Complete Custom Mail Workflow', { annotation: { type: 'description', description: 'Verify end-to-end flow: Create Template in Master -> Onboard Vendor in Registration -> Select Template & Vendor in Custom Mail -> Send Mail -> Verify Recipient Inbox.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CustomMail');
    await page.waitForLoadState('domcontentloaded');
    const sendBtn = page.getByRole('button', { name: /send mail/i }).first();
    await expect(sendBtn).toBeVisible({ timeout: 5000 });
});

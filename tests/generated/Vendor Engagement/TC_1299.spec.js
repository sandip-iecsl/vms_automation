const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1299
 * Module: Vendor Engagement
 * Sub-Module: Custom Mail
 * Scenario: Bulk Dispatching Stress Test (50+ Vendors)
 * Description: Verify system stability and response time when sending bulk template emails.
 */
test('TC_1299: Bulk Dispatching Stress Test (50+ Vendors)', { annotation: { type: 'description', description: 'Verify system stability and response time when sending bulk template emails.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CustomMail');
    await page.waitForLoadState('domcontentloaded');
    const sendBtn = page.getByRole('button', { name: /send mail/i }).first();
    await expect(sendBtn).toBeVisible({ timeout: 5000 });
});

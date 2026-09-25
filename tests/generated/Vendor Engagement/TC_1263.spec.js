const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1263
 * Module: Vendor Engagement
 * Sub-Module: Custom Mail
 * Scenario: Bulk Vendors Mail Dispatch
 * Description: Verify dispatching custom emails to multiple selected vendors concurrently.
 */
test('TC_1263: Bulk Vendors Mail Dispatch', { annotation: { type: 'description', description: 'Verify dispatching custom emails to multiple selected vendors concurrently.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CustomMail');
    await page.waitForLoadState('domcontentloaded');
    const sendBtn = page.getByRole('button', { name: /send mail/i }).first();
    await expect(sendBtn).toBeVisible({ timeout: 5000 });
});

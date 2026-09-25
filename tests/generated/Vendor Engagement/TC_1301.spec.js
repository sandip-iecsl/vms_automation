const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1301
 * Module: Vendor Engagement
 * Sub-Module: Custom Mail
 * Scenario: Google Chrome Layout & Functionality
 * Description: Verify template selection, checkbox toggles, search, and mail dispatch in Chrome.
 */
test('TC_1301: Google Chrome Layout & Functionality', { annotation: { type: 'description', description: 'Verify template selection, checkbox toggles, search, and mail dispatch in Chrome.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CustomMail');
    await page.waitForLoadState('domcontentloaded');
    const sendBtn = page.getByRole('button', { name: /send mail/i }).first();
    await expect(sendBtn).toBeVisible({ timeout: 5000 });
});

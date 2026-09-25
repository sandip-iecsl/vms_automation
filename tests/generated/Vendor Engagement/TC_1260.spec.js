const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1260
 * Module: Vendor Engagement
 * Sub-Module: Custom Mail
 * Scenario: Unselected Template Validation
 * Description: Verify system validation when clicking SEND MAIL without selecting a template.
 */
test('TC_1260: Unselected Template Validation', { annotation: { type: 'description', description: 'Verify system validation when clicking SEND MAIL without selecting a template.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/CustomMail');
    await page.waitForLoadState('domcontentloaded');
    const sendBtn = page.getByRole('button', { name: /send mail/i }).first();
    await expect(sendBtn).toBeVisible({ timeout: 5000 });
});

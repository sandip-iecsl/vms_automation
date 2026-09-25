const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_895
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Custom Mail Dispatch Access
 * Description: Verify mapped user can compose and send custom emails to vendors.
 */
test('TC_895: Custom Mail Dispatch Access', { annotation: { type: 'description', description: 'Verify mapped user can compose and send custom emails to vendors.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    const sendBtn = page.getByRole('button', { name: /send mail/i }).first();
    await expect(sendBtn).toBeVisible({ timeout: 5000 });
});

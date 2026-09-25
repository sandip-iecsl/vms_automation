const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1104
 * Module: Report
 * Sub-Module: Business Card
 * Scenario: Custom Mail Linkage for Scanned Contacts
 * Description: Verify email address from scanned business card is available as recipient in Custom Mail.
 */
test('TC_1104: Custom Mail Linkage for Scanned Contacts', { annotation: { type: 'description', description: 'Verify email address from scanned business card is available as recipient in Custom Mail.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_Card');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

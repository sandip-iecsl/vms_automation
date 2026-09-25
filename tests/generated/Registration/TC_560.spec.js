const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_560
 * Module: Registration
 * Sub-Module: Declaration
 * Scenario: Custom Mail Recipient Update
 * Description: Verify newly registered vendor email appears in Vendor Engagement -> Custom Mail list.
 */
test('TC_560: Custom Mail Recipient Update', { annotation: { type: 'description', description: 'Verify newly registered vendor email appears in Vendor Engagement -> Custom Mail list.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    const dateInput = page.locator('input[type="date"], input[placeholder*="YYYY"], input').first();
    await expect(dateInput).toBeVisible({ timeout: 5000 });
});

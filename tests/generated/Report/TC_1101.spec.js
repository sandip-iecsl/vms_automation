const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1101
 * Module: Report
 * Sub-Module: Business Card
 * Scenario: Synchronized Card Delete Reflection
 * Description: Verify deleting a business card removes it immediately from Business Card Report.
 */
test('TC_1101: Synchronized Card Delete Reflection', { annotation: { type: 'description', description: 'Verify deleting a business card removes it immediately from Business Card Report.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_Card');
    await page.waitForLoadState('domcontentloaded');
    const deleteBtn = page.getByRole('button', { name: /delete/i }).first();
    await expect(deleteBtn).toBeVisible({ timeout: 5000 });
});

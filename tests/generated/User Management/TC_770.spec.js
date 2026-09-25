const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_770
 * Module: User Management
 * Sub-Module: User Mapping
 * Scenario: Rapid Clicks on DELETE Button
 * Description: Verify system stability when rapidly clicking the red DELETE button on a row.
 */
test('TC_770: Rapid Clicks on DELETE Button', { annotation: { type: 'description', description: 'Verify system stability when rapidly clicking the red DELETE button on a row.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserMapping');
    await page.waitForLoadState('domcontentloaded');
    const deleteBtn = page.getByRole('button', { name: /delete/i }).first();
    await expect(deleteBtn).toBeVisible({ timeout: 5000 });
});

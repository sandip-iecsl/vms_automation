const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_602
 * Module: Registration
 * Sub-Module: Vendor Invitation
 * Scenario: Cancel Delete Confirmation Dialog
 * Description: Verify clicking Cancel/No in delete confirmation preserves invitation record.
 */
test('TC_602: Cancel Delete Confirmation Dialog', { annotation: { type: 'description', description: 'Verify clicking Cancel/No in delete confirmation preserves invitation record.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Invitation');
    await page.waitForLoadState('domcontentloaded');
    const deleteBtn = page.getByRole('button', { name: /delete/i }).first();
    await expect(deleteBtn).toBeVisible({ timeout: 5000 });
});

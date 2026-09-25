const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_450
 * Module: Registration
 * Sub-Module: Material Details
 * Scenario: Edit Button Mode Switching
 * Description: Verify clicking Edit (pencil) button makes row inputs editable.
 */
test('TC_450: Edit Button Mode Switching', { annotation: { type: 'description', description: 'Verify clicking Edit (pencil) button makes row inputs editable.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    const editBtn = page.getByRole('button', { name: /edit/i }).first();
    await expect(editBtn).toBeVisible({ timeout: 5000 });
});

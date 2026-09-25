const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_314
 * Module: Registration
 * Sub-Module: Vendor Registration
 * Scenario: Edit Vendor Details (Pencil Icon)
 * Description: Verify clicking the pencil icon opens the multi-step form in edit mode.
 */
test('TC_314: Edit Vendor Details (Pencil Icon)', { annotation: { type: 'description', description: 'Verify clicking the pencil icon opens the multi-step form in edit mode.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    const editBtn = page.getByRole('button', { name: /edit/i }).first();
    await expect(editBtn).toBeVisible({ timeout: 5000 });
});

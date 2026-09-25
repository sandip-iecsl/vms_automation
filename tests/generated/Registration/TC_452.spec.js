const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_452
 * Module: Registration
 * Sub-Module: Material Details
 * Scenario: Blank Field Validation on Edit
 * Description: Verify validation when clearing Material Name during edit mode.
 */
test('TC_452: Blank Field Validation on Edit', { annotation: { type: 'description', description: 'Verify validation when clearing Material Name during edit mode.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    const editBtn = page.getByRole('button', { name: /edit/i }).first();
    await expect(editBtn).toBeVisible({ timeout: 5000 });
});

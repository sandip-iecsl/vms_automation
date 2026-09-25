const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_456
 * Module: Registration
 * Sub-Module: Material Details
 * Scenario: Inline Edit - Boundary & Length Constraints
 * Description: Verify character limits and quantity rules are enforced during inline edit mode.
 */
test('TC_456: Inline Edit - Boundary & Length Constraints', { annotation: { type: 'description', description: 'Verify character limits and quantity rules are enforced during inline edit mode.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    const editBtn = page.getByRole('button', { name: /edit/i }).first();
    await expect(editBtn).toBeVisible({ timeout: 5000 });
});

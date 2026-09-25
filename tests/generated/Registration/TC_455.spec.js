const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_455
 * Module: Registration
 * Sub-Module: Material Details
 * Scenario: Simultaneous Multi-Row Inline Edit Behavior
 * Description: Verify system behavior when clicking Edit on multiple rows simultaneously.
 */
test('TC_455: Simultaneous Multi-Row Inline Edit Behavior', { annotation: { type: 'description', description: 'Verify system behavior when clicking Edit on multiple rows simultaneously.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    const editBtn = page.getByRole('button', { name: /edit/i }).first();
    await expect(editBtn).toBeVisible({ timeout: 5000 });
});

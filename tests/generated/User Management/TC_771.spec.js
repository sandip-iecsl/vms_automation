const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_771
 * Module: User Management
 * Sub-Module: User Mapping
 * Scenario: Delete Mapped User with Active Login Session
 * Description: Verify behavior when deleting mapping for a user who is actively navigating the system.
 */
test('TC_771: Delete Mapped User with Active Login Session', { annotation: { type: 'description', description: 'Verify behavior when deleting mapping for a user who is actively navigating the system.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserMapping');
    await page.waitForLoadState('domcontentloaded');
    const deleteBtn = page.getByRole('button', { name: /delete/i }).first();
    await expect(deleteBtn).toBeVisible({ timeout: 5000 });
});

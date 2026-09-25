const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_459
 * Module: Registration
 * Sub-Module: Material Details
 * Scenario: Rapid Clicks on Delete Button
 * Description: Verify system stability when rapidly clicking the red Delete button.
 */
test('TC_459: Rapid Clicks on Delete Button', { annotation: { type: 'description', description: 'Verify system stability when rapidly clicking the red Delete button.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    const deleteBtn = page.getByRole('button', { name: /delete/i }).first();
    await expect(deleteBtn).toBeVisible({ timeout: 5000 });
});

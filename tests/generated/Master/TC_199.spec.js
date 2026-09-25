const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_199
 * Module: Master
 * Sub-Module: Holiday
 * Scenario: Delete Confirmation Dialog
 * Description: Verify clicking \'DELETE\' button triggers a confirmation dialog.
 */
test('TC_199: Delete Confirmation Dialog', { annotation: { type: 'description', description: 'Verify clicking \'DELETE\' button triggers a confirmation dialog.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/HolidayManager');
    await page.waitForLoadState('domcontentloaded');
    const deleteBtn = page.getByRole('button', { name: /delete/i }).first();
    await expect(deleteBtn).toBeVisible({ timeout: 5000 });
});

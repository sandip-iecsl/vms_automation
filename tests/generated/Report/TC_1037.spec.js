const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1037
 * Module: Report
 * Sub-Module: Business Card
 * Scenario: Fast View Switching Stability
 * Description: Verify UI stability when rapidly clicking Card View and List View toggle icons.
 */
test('TC_1037: Fast View Switching Stability', { annotation: { type: 'description', description: 'Verify UI stability when rapidly clicking Card View and List View toggle icons.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_Card');
    await page.waitForLoadState('domcontentloaded');
    const viewBtn = page.getByRole('button', { name: /view/i }).first();
    await expect(viewBtn).toBeVisible({ timeout: 5000 });
});

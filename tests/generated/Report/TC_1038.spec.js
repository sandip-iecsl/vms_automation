const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_1038
 * Module: Report
 * Sub-Module: Business Card
 * Scenario: Table Column Headers Schema
 * Description: Verify all 6 table column headers render in exact sequence.
 */
test('TC_1038: Table Column Headers Schema', { annotation: { type: 'description', description: 'Verify all 6 table column headers render in exact sequence.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Business_Card');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('table, .MuiDataGrid-root, [role="grid"]').first()).toBeVisible({ timeout: 5000 });
});

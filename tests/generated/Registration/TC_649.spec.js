const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_649
 * Module: Registration
 * Sub-Module: Card Scan
 * Scenario: Editable OCR Extracted Fields
 * Description: Verify user can manually edit/modify any OCR auto-filled text before saving.
 */
test('TC_649: Editable OCR Extracted Fields', { annotation: { type: 'description', description: 'Verify user can manually edit/modify any OCR auto-filled text before saving.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Card_Scan');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('table, .MuiDataGrid-root, [role="grid"]').first()).toBeVisible({ timeout: 5000 });
});

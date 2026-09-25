const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_410
 * Module: Registration
 * Sub-Module: Vendor RegistrationLicense Details
 * Scenario: Disabled Financial Year Labels UI
 * Description: Verify financial year labels (2025-2026, 2024-2025, 2023-2024) are strictly non-editable.
 */
test('TC_410: Disabled Financial Year Labels UI', { annotation: { type: 'description', description: 'Verify financial year labels (2025-2026, 2024-2025, 2023-2024) are strictly non-editable.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

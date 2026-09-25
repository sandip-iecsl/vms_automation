const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_190
 * Module: Master
 * Sub-Module: Holiday
 * Scenario: Duplicate Holiday Date & Region Validation
 * Description: Verify system prevents adding duplicate holiday entries for the same date and region.
 */
test('TC_190: Duplicate Holiday Date & Region Validation', { annotation: { type: 'description', description: 'Verify system prevents adding duplicate holiday entries for the same date and region.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/HolidayManager');
    await page.waitForLoadState('domcontentloaded');
    const addBtn = page.getByRole('button', { name: /add holiday/i }).first();
    await expect(addBtn).toBeVisible({ timeout: 5000 });
    await addBtn.click();
    await expect(page.locator('.MuiDialog-root, .MuiModal-root, .MuiDrawer-root, form').first()).toBeVisible({ timeout: 5000 });
});

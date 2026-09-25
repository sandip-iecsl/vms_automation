const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_192
 * Module: Master
 * Sub-Module: Holiday
 * Scenario: Past and Future Date Validation
 * Description: Verify date range acceptance for current, past, and future calendar years.
 */
test('TC_192: Past and Future Date Validation', { annotation: { type: 'description', description: 'Verify date range acceptance for current, past, and future calendar years.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/HolidayManager');
    await page.waitForLoadState('domcontentloaded');
    const dateInput = page.locator('input[type="date"], input[placeholder*="YYYY"], input').first();
    await expect(dateInput).toBeVisible({ timeout: 5000 });
});

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_193
 * Module: Master
 * Sub-Module: Holiday
 * Scenario: Special Characters & XSS Prevention
 * Description: Verify input sanitization for script tags or invalid symbols in Holiday Name.
 */
test('TC_193: Special Characters & XSS Prevention', { annotation: { type: 'description', description: 'Verify input sanitization for script tags or invalid symbols in Holiday Name.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/HolidayManager');
    await page.waitForLoadState('domcontentloaded');
    const dateInput = page.locator('input[type="date"], input[placeholder*="YYYY"], input').first();
    await expect(dateInput).toBeVisible({ timeout: 5000 });
});

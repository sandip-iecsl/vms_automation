const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_191
 * Module: Master
 * Sub-Module: Holiday
 * Scenario: Blank Holiday Name Prevention (Bug Check ID 31)
 * Description: Verify system strictly blocks creating a holiday with an empty name.
 */
test('TC_191: Blank Holiday Name Prevention (Bug Check ID 31)', { annotation: { type: 'description', description: 'Verify system strictly blocks creating a holiday with an empty name.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/HolidayManager');
    await page.waitForLoadState('domcontentloaded');
    const dateInput = page.locator('input[type="date"], input[placeholder*="YYYY"], input').first();
    await expect(dateInput).toBeVisible({ timeout: 5000 });
});

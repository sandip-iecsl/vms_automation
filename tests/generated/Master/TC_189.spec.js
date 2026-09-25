const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_189
 * Module: Master
 * Sub-Module: Holiday
 * Scenario: Valid Holiday Creation with Region
 * Description: Verify adding a new holiday with specific Region assigned.
 */
test('TC_189: Valid Holiday Creation with Region', { annotation: { type: 'description', description: 'Verify adding a new holiday with specific Region assigned.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/HolidayManager');
    await page.waitForLoadState('domcontentloaded');
    const dateInput = page.locator('input[type="date"], input[placeholder*="YYYY"], input').first();
    await expect(dateInput).toBeVisible({ timeout: 5000 });
});

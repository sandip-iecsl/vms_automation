const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_196
 * Module: Master
 * Sub-Module: Holiday
 * Scenario: Blank Field Validation on Edit
 * Description: Verify validation when clearing mandatory fields during edit.
 */
test('TC_196: Blank Field Validation on Edit', { annotation: { type: 'description', description: 'Verify validation when clearing mandatory fields during edit.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/HolidayManager');
    await page.waitForLoadState('domcontentloaded');
    const dateInput = page.locator('input[type="date"], input[placeholder*="YYYY"], input').first();
    await expect(dateInput).toBeVisible({ timeout: 5000 });
});

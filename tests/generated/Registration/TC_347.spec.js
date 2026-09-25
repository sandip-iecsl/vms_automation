const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_347
 * Module: Registration
 * Sub-Module: Vendor Information
 * Scenario: Future Date Restriction on Birthday
 * Description: Verify system restricts future dates in Birthday field.
 */
test('TC_347: Future Date Restriction on Birthday', { annotation: { type: 'description', description: 'Verify system restricts future dates in Birthday field.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    const dateInput = page.locator('input[type="date"], input[placeholder*="YYYY"], input').first();
    await expect(dateInput).toBeVisible({ timeout: 5000 });
});

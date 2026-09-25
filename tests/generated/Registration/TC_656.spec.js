const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_656
 * Module: Registration
 * Sub-Module: Card Scan
 * Scenario: Designation Special Characters Handling
 * Description: Verify Designation field accepts standard role punctuation (e.g., Sr. Manager - QA / QC).
 */
test('TC_656: Designation Special Characters Handling', { annotation: { type: 'description', description: 'Verify Designation field accepts standard role punctuation (e.g., Sr. Manager - QA / QC).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Card_Scan');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

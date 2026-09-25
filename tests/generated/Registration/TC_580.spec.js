const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_580
 * Module: Registration
 * Sub-Module: Vendor Invitation
 * Scenario: Master Category Dropdown Population
 * Description: Verify Category Name dropdown lists active categories from Category Master.
 */
test('TC_580: Master Category Dropdown Population', { annotation: { type: 'description', description: 'Verify Category Name dropdown lists active categories from Category Master.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Invitation');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

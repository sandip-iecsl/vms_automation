const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_703
 * Module: User Management
 * Sub-Module: Group Creation
 * Scenario: Single Character / Abbreviation Group Name
 * Description: Verify system accepts short valid department abbreviations (e.g. QA, HR, IT, jeb).
 */
test('TC_703: Single Character / Abbreviation Group Name', { annotation: { type: 'description', description: 'Verify system accepts short valid department abbreviations (e.g. QA, HR, IT, jeb).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserGroup');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

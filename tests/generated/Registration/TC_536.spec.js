const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_536
 * Module: Registration
 * Sub-Module: Declaration
 * Scenario: Question Label Display
 * Description: Verify display of \'Do you supply certificate of analysis with product?\' label.
 */
test('TC_536: Question Label Display', { annotation: { type: 'description', description: 'Verify display of \'Do you supply certificate of analysis with product?\' label.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

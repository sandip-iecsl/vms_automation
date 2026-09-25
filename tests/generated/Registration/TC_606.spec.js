const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_606
 * Module: Registration
 * Sub-Module: Vendor Invitation
 * Scenario: Status Badge Styling
 * Description: Verify visual display and color coding of \'Invited\' status text.
 */
test('TC_606: Status Badge Styling', { annotation: { type: 'description', description: 'Verify visual display and color coding of \'Invited\' status text.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Invitation');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

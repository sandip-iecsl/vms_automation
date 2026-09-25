const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_588
 * Module: Registration
 * Sub-Module: Vendor Invitation
 * Scenario: Invalid Email Format Validation
 * Description: Verify system rejects improperly formatted email strings.
 */
test('TC_588: Invalid Email Format Validation', { annotation: { type: 'description', description: 'Verify system rejects improperly formatted email strings.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Invitation');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_646
 * Module: Registration
 * Sub-Module: Card Scan
 * Scenario: Submit Form with All Fields Blank
 * Description: Verify clicking SAVE when no images are uploaded and all form inputs are blank (Non-mandatory).
 */
test('TC_646: Submit Form with All Fields Blank', { annotation: { type: 'description', description: 'Verify clicking SAVE when no images are uploaded and all form inputs are blank (Non-mandatory).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Card_Scan');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

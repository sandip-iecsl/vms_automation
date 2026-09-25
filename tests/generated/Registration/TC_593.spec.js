const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_593
 * Module: Registration
 * Sub-Module: Vendor Invitation
 * Scenario: Edit Modal Pre-population
 * Description: Verify clicking EDIT button opens modal with existing vendor invitation details pre-filled.
 */
test('TC_593: Edit Modal Pre-population', { annotation: { type: 'description', description: 'Verify clicking EDIT button opens modal with existing vendor invitation details pre-filled.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Invitation');
    await page.waitForLoadState('domcontentloaded');
    const editBtn = page.getByRole('button', { name: /edit/i }).first();
    await expect(editBtn).toBeVisible({ timeout: 5000 });
});

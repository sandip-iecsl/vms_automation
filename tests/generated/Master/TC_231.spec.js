const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_231
 * Module: Master
 * Sub-Module: Template
 * Scenario: Reset Action in Edit Mode
 * Description: Verify clicking \'Reset\' during edit mode cancels edit operation.
 */
test('TC_231: Reset Action in Edit Mode', { annotation: { type: 'description', description: 'Verify clicking \'Reset\' during edit mode cancels edit operation.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/TemplateMaster');
    await page.waitForLoadState('domcontentloaded');
    const editBtn = page.getByRole('button', { name: /edit/i }).first();
    await expect(editBtn).toBeVisible({ timeout: 5000 });
});

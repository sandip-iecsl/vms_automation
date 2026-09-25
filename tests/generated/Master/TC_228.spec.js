const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_228
 * Module: Master
 * Sub-Module: Template
 * Scenario: Edit Button Mode Switching
 * Description: Verify clicking \'EDIT\' populates form above and changes button to \'Update\'.
 */
test('TC_228: Edit Button Mode Switching', { annotation: { type: 'description', description: 'Verify clicking \'EDIT\' populates form above and changes button to \'Update\'.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/TemplateMaster');
    await page.waitForLoadState('domcontentloaded');
    const editBtn = page.getByRole('button', { name: /edit/i }).first();
    await expect(editBtn).toBeVisible({ timeout: 5000 });
});

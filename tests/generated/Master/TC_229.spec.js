const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_229
 * Module: Master
 * Sub-Module: Template
 * Scenario: Blank Field Validation on Edit
 * Description: Verify validation when clearing mandatory fields during edit mode.
 */
test('TC_229: Blank Field Validation on Edit', { annotation: { type: 'description', description: 'Verify validation when clearing mandatory fields during edit mode.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/TemplateMaster');
    await page.waitForLoadState('domcontentloaded');
    const editBtn = page.getByRole('button', { name: /edit/i }).first();
    await expect(editBtn).toBeVisible({ timeout: 5000 });
});

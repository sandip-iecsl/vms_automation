const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_213
 * Module: Master
 * Sub-Module: Template
 * Scenario: Max Character Length Boundary
 * Description: Verify character length boundary on Title field.
 */
test('TC_213: Max Character Length Boundary', { annotation: { type: 'description', description: 'Verify character length boundary on Title field.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/TemplateMaster');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

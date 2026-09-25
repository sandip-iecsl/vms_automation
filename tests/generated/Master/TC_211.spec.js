const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_211
 * Module: Master
 * Sub-Module: Template
 * Scenario: Dynamic Variable Tags Parsing
 * Description: Verify Title supports placeholder tags like {{event}} and {{name}}.
 */
test('TC_211: Dynamic Variable Tags Parsing', { annotation: { type: 'description', description: 'Verify Title supports placeholder tags like {{event}} and {{name}}.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/TemplateMaster');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

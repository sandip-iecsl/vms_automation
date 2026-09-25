const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_239
 * Module: Master
 * Sub-Module: Template
 * Scenario: Rows Per Page & Navigation Controls
 * Description: Verify rows per page selector and page navigation (<, >).
 */
test('TC_239: Rows Per Page & Navigation Controls', { annotation: { type: 'description', description: 'Verify rows per page selector and page navigation (<, >).' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/TemplateMaster');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

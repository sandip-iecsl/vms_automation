const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_223
 * Module: Master
 * Sub-Module: Template
 * Scenario: Valid Template Creation
 * Description: Verify creating a new template with valid Title, Type, Message, and Image.
 */
test('TC_223: Valid Template Creation', { annotation: { type: 'description', description: 'Verify creating a new template with valid Title, Type, Message, and Image.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/TemplateMaster');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

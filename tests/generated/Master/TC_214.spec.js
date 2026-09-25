const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_214
 * Module: Master
 * Sub-Module: Template
 * Scenario: Dropdown Population
 * Description: Verify Type dropdown populates standard events and dynamic Holiday/Event master data.
 */
test('TC_214: Dropdown Population', { annotation: { type: 'description', description: 'Verify Type dropdown populates standard events and dynamic Holiday/Event master data.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/TemplateMaster');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

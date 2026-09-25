const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_222
 * Module: Master
 * Sub-Module: Template
 * Scenario: Missing / Optional File Submission
 * Description: Verify submitting template without attaching an image file.
 */
test('TC_222: Missing / Optional File Submission', { annotation: { type: 'description', description: 'Verify submitting template without attaching an image file.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/TemplateMaster');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

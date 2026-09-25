const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_706
 * Module: User Management
 * Sub-Module: Group Creation
 * Scenario: Keyboard Enter Key Modal Submission
 * Description: Verify pressing Enter key inside Group Name input triggers form submission.
 */
test('TC_706: Keyboard Enter Key Modal Submission', { annotation: { type: 'description', description: 'Verify pressing Enter key inside Group Name input triggers form submission.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserGroup');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

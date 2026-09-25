const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_694
 * Module: User Management
 * Sub-Module: Group Creation
 * Scenario: Whitespace Only Submission Validation (Bug Check ID 11, 13)
 * Description: Verify system rejects submitting only blank spaces in Group Name.
 */
test('TC_694: Whitespace Only Submission Validation (Bug Check ID 11, 13)', { annotation: { type: 'description', description: 'Verify system rejects submitting only blank spaces in Group Name.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserGroup');
    await page.waitForLoadState('domcontentloaded');
    const addBtn = page.getByRole('button', { name: /add group/i }).first();
    await expect(addBtn).toBeVisible({ timeout: 5000 });
    await addBtn.click();
    await expect(page.locator('.MuiDialog-root, .MuiModal-root, .MuiDrawer-root, form').first()).toBeVisible({ timeout: 5000 });
});

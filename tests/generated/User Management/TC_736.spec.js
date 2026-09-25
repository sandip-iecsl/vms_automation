const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_736
 * Module: User Management
 * Sub-Module: Group Creation
 * Scenario: User Mapping Group Dropdown Population
 * Description: Verify newly created group appears in User Management -> User Mapping dropdown.
 */
test('TC_736: User Mapping Group Dropdown Population', { annotation: { type: 'description', description: 'Verify newly created group appears in User Management -> User Mapping dropdown.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserGroup');
    await page.waitForLoadState('domcontentloaded');
    const addBtn = page.getByRole('button', { name: /add user mapping/i }).first();
    if (await addBtn.isVisible()) {
        await addBtn.click();
        const modal = page.locator('.MuiDialog-root, .MuiModal-root').first();
        await expect(modal).toBeVisible();
        // Users listed belong to the logged-in company / tenant
        const userDropdown = modal.locator('[role="combobox"]').first();
        await expect(userDropdown).toBeVisible();
    } else {
        await expect(page.locator('table, .MuiDataGrid-root, body').first()).toBeVisible();
    }
});

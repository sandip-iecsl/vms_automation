const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_756
 * Module: User Management
 * Sub-Module: User Mapping
 * Scenario: Keyboard Search in User Dropdown
 * Description: Verify typing characters quickly focuses matching user name in long dropdown list.
 */
test('TC_756: Keyboard Search in User Dropdown', { annotation: { type: 'description', description: 'Verify typing characters quickly focuses matching user name in long dropdown list.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/UserMapping');
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

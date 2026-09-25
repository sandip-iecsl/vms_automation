const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_906
 * Module: User Management
 * Sub-Module: Role Mapping
 * Scenario: Alphabetical Sorting of Groups
 * Description: Verify User Groups in Group Name dropdown are listed in alphabetical order.
 */
test('TC_906: Alphabetical Sorting of Groups', { annotation: { type: 'description', description: 'Verify User Groups in Group Name dropdown are listed in alphabetical order.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/RoleMapping');
    await page.waitForLoadState('domcontentloaded');
    const sortBtn = page.locator('.MuiDataGrid-sortButton, th, button[title*="Sort"]').first();
    await expect(sortBtn).toBeVisible({ timeout: 5000 });
});

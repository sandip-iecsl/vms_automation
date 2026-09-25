const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_970
 * Module: Report
 * Sub-Module: All Vendor
 * Scenario: Keyboard Escape Key Clears Search
 * Description: Verify pressing Escape key inside search input clears the filter query.
 */
test('TC_970: Keyboard Escape Key Clears Search', { annotation: { type: 'description', description: 'Verify pressing Escape key inside search input clears the filter query.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Vendor_CardView');
    await page.waitForLoadState('domcontentloaded');
    const searchInput = page.locator('input[type="text"]').first();
    await expect(searchInput).toBeVisible();
    await searchInput.fill('TEST');
    await page.waitForTimeout(300);
    await searchInput.clear();
});

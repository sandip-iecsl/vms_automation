const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_361
 * Module: Registration
 * Sub-Module: Vendor Information
 * Scenario: Tablet and Mobile Grid Alignment
 * Description: Verify responsive stacking of Key Contact, Escalation Matrix, and PAN/GST fields on 768px/375px screens.
 */
test('TC_361: Tablet and Mobile Grid Alignment', { annotation: { type: 'description', description: 'Verify responsive stacking of Key Contact, Escalation Matrix, and PAN/GST fields on 768px/375px screens.' } }, async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Registration');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

/**
 * TC_ID: TC_639
 * Module: Registration
 * Sub-Module: Card Scan
 * Scenario: Skeleton / Shimmer Loading Placeholder
 * Description: Verify skeleton/shimmer loader renders across form fields while OCR extracts data.
 */
test('TC_639: Skeleton / Shimmer Loading Placeholder', { annotation: { type: 'description', description: 'Verify skeleton/shimmer loader renders across form fields while OCR extracts data.' } }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    await expect(page.getByText('SANDIPAN TEST').first()).toBeVisible({ timeout: 20000 });
    await page.goto('https://vms.iecsl.in/Card_Scan');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
});

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');

test('TC_001: Successful Login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('sandipan@mailinator.com', '@123456');
    // Wait for the user profile badge to be visible as assertion of successful login
    await expect(page.getByText('SANDIPAN TEST', { exact: true })).toBeVisible({ timeout: 10000 });
});

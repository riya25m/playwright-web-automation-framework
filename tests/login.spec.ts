import { test } from '@playwright/test';

import { LoginPage, Logout } from '../pages/login.page';


test.describe('Login Smoke test cases', async() => {

  test.beforeEach('Login - Positive Flow', async({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.redirectToURL();
    await loginPage.enterUsername('Admin');
    await loginPage.enterPassowrd('admin123');
    await loginPage.clickOnSubmitButton();
    await loginPage.validateHeaderDashboard();
  })

  test('Logout Scenario', async({ page }) => {

    const logout = new Logout(page);

    await logout.clickOnUserProfileOnHeader();
    await logout.clickOnLogoutoption();
    await logout.validateLoginScreen();

  })
})
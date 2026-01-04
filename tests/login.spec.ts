import { test } from '@playwright/test';

import { LoginPage } from '../pages/login.page';


test.describe('Login Smoke test cases', async() => {

  test('Login - Positive Flow', async({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.redirectToURL();
    await loginPage.enterUsername('Admin');
    await loginPage.enterPassowrd('admin123');
    await loginPage.clickOnSubmitButton();
    await loginPage.validateHeaderDashboard();
  })
})
import { test, expect } from '../fixtures/loginFitures';

test('Login with valid credentials', async ({ loginPage, validUser, url}) => {
  await loginPage.goto();
  await loginPage.login(validUser.username, validUser.password);
  await expect(loginPage.clearSessionButton).toBeVisible();
  await loginPage.assertDashboardVisible(url.dashboardUrl);
});

test('Login with invalid username', async ({ loginPage, invalidUser }) => {
  await loginPage.goto();
  await loginPage.login(invalidUser.username, invalidUser.password);
  await expect(loginPage.loginButton).toBeVisible(); // still on login page
});

test('Login with empty credentials', async ({ loginPage, emptyUser }) => {
  await loginPage.goto();
  await loginPage.login(emptyUser.username, emptyUser.password);
  await expect(loginPage.usernameField).toHaveJSProperty('validationMessage', 'Please fill in this field.');
});

test('Microsoft sign-in button visible', async ({ loginPage }) => {
  await loginPage.goto();
  await loginPage.assertMicrosoftButtonVisible();
});

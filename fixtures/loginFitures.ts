import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { users } from '../Data/loginData';

type Fixtures = {
  loginPage: LoginPage;
  validUser: { username: string; password: string };
  invalidUser: { username: string; password: string };
  invalidPass: { username: string; password: string };
  emptyUser: { username: string; password: string };
  url: { dashboardUrl: string };
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  validUser: async ({}, use) => await use(users.valid),
  invalidUser: async ({}, use) => await use(users.invalidUser),
  invalidPass: async ({}, use) => await use(users.invalidPass),
  emptyUser: async ({}, use) => await use(users.empty),
  url: async ({}, use) => await use(users.url)
});

export { expect } from '@playwright/test';

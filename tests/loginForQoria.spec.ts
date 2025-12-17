import {test, expect} from '@playwright/test';
import {contactforQoria} from '../pages/loginForQoria'




test.only('dashboard login for qoria', async({page}) => {
  const loginPage = new contactforQoria(page);
await loginPage.goto();
await loginPage.login();
await loginPage.assertion("https://qoria.com/contact")


});
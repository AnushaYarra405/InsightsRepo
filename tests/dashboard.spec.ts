import {test, expect} from '@playwright/test'
import {dashboardData} from '../data/dashboardData'

test("dashboard menu validation", async({page}) => {
await page.goto('https://d38e0ppz3ehxvv.cloudfront.net/login');
await page.locator("#username").fill(dashboardData.loginData.username);
await page.locator("#password").fill(dashboardData.loginData.passowrd);
await page.locator("button[type = 'submit']").click();
await expect(page).toHaveURL('https://d38e0ppz3ehxvv.cloudfront.net/dashboard');
});
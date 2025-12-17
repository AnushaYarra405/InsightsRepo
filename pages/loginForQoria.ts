import {Page, Locator, expect } from '@playwright/test'

export class contactforQoria {

readonly page: Page;
readonly firstNameField: Locator;
readonly lastNameField: Locator;
readonly company: Locator;
readonly email: Locator;
readonly phone: Locator;
readonly country: Locator;
readonly messageTextBox: Locator;
readonly submitButton: Locator;


constructor(page: Page) {
this.page = page;
this.firstNameField = page.locator('input[name="firstname"]');
this.lastNameField = page.locator('input[name="lastname"]');
this.company = page.locator('input[name="company"]');
this.email = page.locator('input[name="email"]');
this.phone = page.locator('input[name="phone"]');
this.country = page.locator('input[name="country"]');
this.messageTextBox = page.locator('textarea[name="message"]');
this.submitButton = page.getByRole('button',{name:'Submit'});
}

async goto() {
await this.page.goto('https://qoria.com/contact');
}

async login(){
 await expect(this.firstNameField).toBeVisible();
 await this.firstNameField.fill("anusha");
 
 await expect(this.lastNameField).toBeVisible();
 await this.lastNameField.fill("Yarra");

 await expect(this.company).toBeVisible();
 await this.company.fill("technoidentity");

 await expect(this.email).toBeVisible();
 await this.email.fill("anusha@gmail.com");

 await expect(this.phone).toBeVisible();
 await this.phone.fill("093843953");

 await expect(this.country).toBeVisible();
 await this.country.fill("Australia");

 await expect(this.messageTextBox).toBeVisible();
 await this.messageTextBox.fill("nothing");

 await expect(this.submitButton).toBeVisible()

}

async assertion(url:string){
await expect(this.page).toHaveURL(url);
}

}

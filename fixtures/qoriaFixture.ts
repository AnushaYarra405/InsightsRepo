import { test as base, expect } from '@playwright/test';
import { contactforQoria } from '../pages/loginForQoria';
import { contactdata } from '../data/quriaData';

type Fixtures = {
  contactForm: contactforQoria;
  validData: typeof contactdata.valid;
  invalidData: typeof contactdata.invalidData;
  emptyData: typeof contactdata.emptyData;
  url: typeof contactdata.url;
};

export const test = base.extend<Fixtures>({
  contactForm: async ({ page }, use) => {
    const contactForm = new contactforQoria(page);
    await use(contactForm);
  },
  validData: async ({}, use) => await use(contactdata.valid),
  invalidData: async ({}, use) => await use(contactdata.invalidData),
  emptyData: async ({}, use) => await use(contactdata.emptyData),
  url: async ({}, use) => await use(contactdata.url),
});



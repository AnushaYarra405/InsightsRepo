import { test, expect } from '../fixtures/qoriaFixture';

test.only('dashboard login for qoria', async ({ contactForm, validData, url }) => {
  await contactForm.goto();
  await contactForm.login(
    validData.firstName,
    validData.lastName,
    validData.company,
    validData.email,
    validData.phone,
    validData.country,
    validData.messageTextBox
  );
  await contactForm.assertDashboardVisible(url.dashboardUrl);
});

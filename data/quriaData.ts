export const contactdata = {
  valid: {
    firstName: 'anusha',
    lastName: 'yarra',
    company: 'technoidentity',
    email: 'anusha@gmail.com',
    phone: '093493',
    country: 'australia',
    messageTextBox: 'NA'
  },
  emptyData: {
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    messageTextBox: ''
  },
  invalidData: {
    firstName: '123',
    lastName: '!',
    company: '',
    email: 'invalid-email',
    phone: 'abc',
    country: 'unknown',
    messageTextBox: '###'   // fixed to match consistently
  },
  url: { dashboardUrl: 'https://qoria.com/contact' }
};

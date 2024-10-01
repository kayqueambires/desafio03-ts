const account = {
  username: 'admin',
  email: 'admin',
  password: 'admin',
  balance: 1000,
  id: '1',
};

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(account);
  }, 3000);
});

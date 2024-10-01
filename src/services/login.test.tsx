import { login } from './login';

describe('login', () => {
  const mockUser = 'admin';
  const mockPassword = 'admin';
  it('Deve retornar uma mensagem de boas-vindas', async () => {
    const response = await login(mockUser, mockPassword);
    expect(response).toBeTruthy();
  });

  it('Deve exibir um erro caso o username seja inválido', async () => {
    const response = await login('teste', mockPassword);
    expect(response).toBeFalsy();
  });

  it('Deve exibir um erro caso o password seja inválido', async () => {
    const response = await login(mockUser, 'teste');
    expect(response).toBeFalsy();
  });
});

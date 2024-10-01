import { api } from '../api';

export const login = async (username: string, password: string): Promise<boolean> => {
  const data: any = await api;

  if (data.username !== username || data.password !== password ) {
    return false;
  }

  return true;
};

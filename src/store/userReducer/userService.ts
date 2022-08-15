import { api } from '../../services/api';
import {
  IDataPurchase, ITransaction, IUserGetToken, IUserInformation, IUserRegister,
} from '../../types';

interface GetTokenResponse {
  token: string
  user_email: string
  user_nicename: string
  user_display_name: string
}

export const getToken = async (user: IUserGetToken): Promise<GetTokenResponse> => {
  const { data } = await api.token<GetTokenResponse, IUserGetToken>(user);
  const { token } = data;
  localStorage.setItem('token', token);

  return data;
};

export const validateToken = async (): Promise<void> => {
  await api.validateToken();
};

export const getUser = async (): Promise<IUserInformation> => {
  const { data } = await api.get<IUserInformation>('/usuario');

  return data;
};

export const postUser = async (user: IUserRegister): Promise<void> => {
  await api.post<unknown, IUserRegister>('/usuario', user);
};

export const updateUser = async (user: IUserRegister): Promise<void> => {
  await api.put<unknown, IUserRegister>('/usuario', user);
};

export const getTransactionPurchases = async (): Promise<ITransaction[]> => {
  const { data } = await api.get<ITransaction[]>('transacao?tipo=comprador_id');

  return data;
};

export const getTransactionSales = async (): Promise<ITransaction[]> => {
  const { data } = await api.get<ITransaction[]>('transacao?tipo=vendedor_id');

  return data;
};

export const postPurchases = async (purchaseData: IDataPurchase): Promise<void> => {
  await api.post<unknown, IDataPurchase>('transacao', purchaseData);
};

import { api } from '../../services/api';
import {
  DataPurchase, Product, Transaction, UserGetToken, UserInformation, UserRegister,
} from '../../types';

interface GetTokenResponse {
  token: string
  user_email: string
  user_nicename: string
  user_display_name: string
}

interface PostProduct {
  nome: string
  descricao: string
  preco: string
  photos: {
    name: string
    src: string
  }[]
}

export const getToken = async (user: UserGetToken): Promise<GetTokenResponse> => {
  const { data } = await api.token<GetTokenResponse, UserGetToken>(user);
  const { token } = data;
  localStorage.setItem('token', token);

  return data;
};

export const validateToken = async (): Promise<void> => {
  await api.validateToken();
};

export const getUser = async (): Promise<UserInformation> => {
  const { data } = await api.get<UserInformation>('/usuario');

  return data;
};

export const postUser = async (user: UserRegister): Promise<void> => {
  await api.post<unknown, UserRegister>('/usuario', user);
};

export const updateUser = async (user: UserRegister): Promise<void> => {
  await api.put<unknown, UserRegister>('/usuario', user);
};

export const getTransactionPurchases = async (): Promise<Transaction[]> => {
  const { data } = await api.get<Transaction[]>('transacao?tipo=comprador_id');

  return data;
};

export const getTransactionSales = async (): Promise<Transaction[]> => {
  const { data } = await api.get<Transaction[]>('transacao?tipo=vendedor_id');

  return data;
};

export const postPurchases = async (purchaseData: DataPurchase): Promise<void> => {
  await api.post<unknown, DataPurchase>('transacao', purchaseData);
};

// export const postProductAnnounced = async (dataProduct: PostProduct): Promise<void> => {
//   await api.post<unknown, unknown>('/produto', dataWithPhotos);
// };

export const getProductsAnnounced = async (id: string): Promise<Product[]> => {
  const { data } = await api.get<Product[]>(`/produto?usuario_id=${id}`);

  return data;
};

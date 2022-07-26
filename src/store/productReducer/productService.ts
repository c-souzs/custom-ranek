import { api } from '../../services/api';
import { Product } from '../../types';

export const getProduct = async (slug: string): Promise<Product> => {
  const { data } = await api.get<Product>(`/produto/${slug}`);

  return data;
};

export const getProductList = async (query: string): Promise<Product[]> => {
  const { data } = await api.get<Product[]>(`/produto${query}`);

  return data;
};

export const getProductSearch = async (search: string): Promise<Product[]> => {
  const { data } = await api.get<Product[]>(`produto?_limit=9&q=${search}`);

  return data;
};

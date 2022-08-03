import { api } from '../../services/api';
import { Product, ProductPost } from '../../types';

export const postProduct = async (dataProduct: ProductPost): Promise<void> => {
  const {
    photos, name, description, price,
  } = dataProduct;

  const dataPost = new FormData();

  dataPost.append('nome', name);
  dataPost.append('descricao', description);
  dataPost.append('preco', price);

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < photos.length; i++) {
    dataPost.append(photos[i].name, photos[i].file);
  }

  await api.post('/produto', dataPost);
};

export const deleteProduct = async (slug: string): Promise<void> => {
  await api.delete(`/produto/${slug}`);
};

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

export const getProductUserAnnounced = async (id: string): Promise<Product[]> => {
  const { data } = await api.get<Product[]>(`/produto?usuario_id=${id}`);

  return data;
};

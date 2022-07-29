import { api } from '../../services/api';
import { Product } from '../../types';

interface ProductDataPhoto {
  name: string
  file: File
}

interface ProductPost {
  nome: string
  preco: string
  descricao: string
  photoCover: ProductDataPhoto
  photoFront: ProductDataPhoto
  photoBack: ProductDataPhoto
}

export const postProduct = async (dataProduct: ProductPost): Promise<void> => {
  const dataPost = {
    nome: dataProduct.nome,
    descricao: dataProduct.descricao,
    preco: dataProduct.preco,
    [`photoCover-${dataProduct.photoCover.name}`]: dataProduct.photoCover.file,
    [`photoFront-${dataProduct.photoFront.name}`]: dataProduct.photoFront.file,
    [`photoBack-${dataProduct.photoBack.name}`]: dataProduct.photoBack.file,
  };

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

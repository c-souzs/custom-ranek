/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../services/api';

interface Product {
  id: string
  fotos: { titulo: string; src: string }[] | null
  nome: string
  preco: string
  descricao: string
  vendido: string
  usuario_id: string
}

interface ErrorData {
  code: string
  data: { message: number }
  message: string
}

interface ProductInitialState {
  actualPage: Product | null
  list: Product[] | null
  search: Product | Product[] | null
  user: Product | Product[] | null
  loading: boolean
  error: string | null
}

const getProduct = async (slug: string): Promise<Product> => {
  const { data } = await api.get<Product>(`/produto/${slug}`);

  return data;
};

const getProductsAll = async (query: string): Promise<Product[]> => {
  const { data } = await api.get<Product[]>(`/produto${query}`);

  return data;
};

const getProductsSearch = async (search: string): Promise<Product[]> => {
  const { data } = await api.get<Product[]>(`produto?_limit=9&q=${search}`);

  return data;
};

export const getProductPage = createAsyncThunk('product/page', async (slug: string, thunkAPI) => {
  try {
    const product = await getProduct(slug);

    return product;
  } catch (error) {
    const errorData = error as ErrorData;
    return thunkAPI.rejectWithValue(errorData.message);
  }
});

export const getAllProducts = createAsyncThunk('product/productsHome', async (query: string, thunkAPI) => {
  try {
    const products = await getProductsAll(query);

    return products;
  } catch (error) {
    const errorData = error as ErrorData;
    return thunkAPI.rejectWithValue(errorData.message);
  }
});

export const getSeacrhProducts = createAsyncThunk('product/productsSearch', async (search: string, thunkAPI) => {
  try {
    const result = await getProductsSearch(search);

    return result;
  } catch (error) {
    const errorData = error as ErrorData;
    return thunkAPI.rejectWithValue(errorData.message);
  }
});

const initialState: ProductInitialState = {
  actualPage: null,
  list: null,
  search: null,
  user: null,
  loading: false,
  error: null,
};

const product = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductPage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductPage.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.actualPage = action.payload;
      })
      .addCase(getProductPage.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
        state.actualPage = null;
      })
      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.list = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
        state.actualPage = null;
      })
      .addCase(getSeacrhProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSeacrhProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.search = action.payload;
      })
      .addCase(getSeacrhProducts.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
        state.actualPage = null;
      });
  },
});

export default product.reducer;

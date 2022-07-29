/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ErrorData, Product } from '../../types';
import {
  deleteProduct, getProduct, getProductList, getProductSearch, postProduct,
} from './productService';

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

export interface InitialStateProduct {
  loading: boolean
  error: string | null
  types: {
    page: Product | null
    list: Product[]
    search: Product[]
  }
}

export const productPage = createAsyncThunk('product/page', async (slug: string, thunkAPI) => {
  try {
    const product = await getProduct(slug);

    return product;
  } catch (error) {
    const errorData = error as ErrorData;
    return thunkAPI.rejectWithValue(errorData.message);
  }
});

export const productList = createAsyncThunk('product/productList', async (query: string, thunkAPI) => {
  try {
    const products = await getProductList(query);

    return products;
  } catch (error) {
    const errorData = error as ErrorData;
    return thunkAPI.rejectWithValue(errorData.message);
  }
});

export const productSearch = createAsyncThunk('product/productSearch', async (search: string, thunkAPI) => {
  try {
    const result = await getProductSearch(search);

    return result;
  } catch (error) {
    const errorData = error as ErrorData;
    return thunkAPI.rejectWithValue(errorData.message);
  }
});

export const productsAnnounced = createAsyncThunk('product/postProduct', async (data: ProductPost, thunkAPI) => {
  try {
    postProduct(data);

    return true;
  } catch (error) {
    const errorData = error as ErrorData;
    return thunkAPI.rejectWithValue(errorData.message);
  }
});

export const productAnnouncedDelete = createAsyncThunk(
  'product/deleProductAnnounced',
  async (slug: string, thunkAPI) => {
    try {
      deleteProduct(slug);

      return true;
    } catch (error) {
      const errorData = error as ErrorData;
      return thunkAPI.rejectWithValue(errorData.message);
    }
  },
);

const initialState: InitialStateProduct = {
  loading: false,
  error: null,
  types: {
    page: null,
    list: [],
    search: [],
  },
};

const product = createSlice({
  name: 'product',
  initialState,
  reducers: {
    clearSearch: (state) => {
      state.types.search = [];
    },
  },
  extraReducers: (builder) => {
    builder
      // PRODUCT PAGE
      .addCase(productPage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(productPage.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.types.page = action.payload;
      })
      .addCase(productPage.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
        state.types.page = null;
      })
      // PRODUCT LIST
      .addCase(productList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(productList.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.types.list = action.payload;
      })
      .addCase(productList.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
        state.types.list = [];
      })
      // PRODUCT SEARCH
      .addCase(productSearch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(productSearch.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.types.search = action.payload;
      })
      .addCase(productSearch.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
        state.types.search = [];
      })
      // PRODUCT ANNOUNCED
      .addCase(productsAnnounced.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(productsAnnounced.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(productsAnnounced.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      })
      // PRODUCT DELETE
      .addCase(productAnnouncedDelete.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(productAnnouncedDelete.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(productAnnouncedDelete.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      });
  },
});

export const { clearSearch } = product.actions;

export default product.reducer;

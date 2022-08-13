/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ErrorData, Product, ProductPost } from '../../types';
import { RootState } from '../configure';
import {
  deleteProduct,
  getProduct,
  getProductList,
  getProductSearch,
  getProductUserAnnounced,
  postProduct,
} from './productService';

export interface InitialStateProduct {
  loading: boolean
  error: string | null
  types: {
    page: Product | null
    list: Product[]
    search: Product[]
    user: Product[]
  }
}

export const productPage = createAsyncThunk('product/pageGet', async (slug: string, thunkAPI) => {
  try {
    const product = await getProduct(slug);

    return product;
  } catch (error) {
    const errorData = error as ErrorData;
    return thunkAPI.rejectWithValue(errorData.message);
  }
});

export const productList = createAsyncThunk('product/listGet', async (query: string, thunkAPI) => {
  try {
    const products = await getProductList(query);

    return products;
  } catch (error) {
    const errorData = error as ErrorData;
    return thunkAPI.rejectWithValue(errorData.message);
  }
});

export const productSearch = createAsyncThunk('product/searchGet', async (search: string, thunkAPI) => {
  try {
    const result = await getProductSearch(search);

    return result;
  } catch (error) {
    const errorData = error as ErrorData;
    return thunkAPI.rejectWithValue(errorData.message);
  }
});

export const productUnannounced = createAsyncThunk('product/announceDelete', async (slug: string, thunkAPI) => {
  try {
    deleteProduct(slug);

    return true;
  } catch (error) {
    const errorData = error as ErrorData;
    return thunkAPI.rejectWithValue(errorData.message);
  }
});

// eslint-disable-next-line max-len
export const productUser = createAsyncThunk('product/userAnnounceGet', async (id: string, thunkAPI) => {
  try {
    const products = await getProductUserAnnounced(id);

    return products;
  } catch (error) {
    const errorData = error as ErrorData;
    return thunkAPI.rejectWithValue(errorData.message);
  }
});

export const productAnnounce = createAsyncThunk('product/announcePost', async (data: ProductPost, thunkAPI) => {
  try {
    await postProduct(data);
    await thunkAPI.dispatch(productUser(''));

    return true;
  } catch (error) {
    const errorData = error as ErrorData;
    return thunkAPI.rejectWithValue(errorData.message);
  }
});

const initialState: InitialStateProduct = {
  loading: false,
  error: null,
  types: {
    page: null,
    list: [],
    search: [],
    user: [],
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
      .addCase(productAnnounce.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(productAnnounce.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(productAnnounce.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      })
      // PRODUCT DELETE
      .addCase(productUnannounced.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(productUnannounced.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(productUnannounced.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      })
      // PRODUCT USER
      .addCase(productUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(productUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.types.user = action.payload;
      })
      .addCase(productUser.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
        state.types.user = [];
      });
  },
});

export const { clearSearch } = product.actions;

export default product.reducer;

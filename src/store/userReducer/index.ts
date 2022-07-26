/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  DataPurchase, ErrorData, Product, Transaction, UserGetToken, UserInformation, UserRegister,
} from '../../types';
import {
  getProductsAnnounced,
  getToken,
  getTransactionPurchases,
  getTransactionSales,
  getUser,
  postPurchases,
  postUser,
  updateUser,
  validateToken,
} from './userService';

interface UserData {
  information: UserInformation | null
  transaction: {
    sales: Transaction[]
    purchases: Transaction[]
  }
  productsAnnounced: Product[]
}

export interface InitialStateUser {
  loading: boolean
  error: string | null
  data: UserData
}

export const loginUser = createAsyncThunk('user/login', async (user: UserGetToken, thunkAPI) => {
  try {
    await getToken(user);
    await validateToken();

    const dataUser = await getUser();

    return dataUser;
  } catch (error) {
    localStorage.removeItem('token');
    const errorData = error as ErrorData;
    return thunkAPI.rejectWithValue(errorData.message);
  }
});

export const registerUser = createAsyncThunk('user/register', async (user: UserRegister, thunkAPI) => {
  try {
    await postUser(user);
    await thunkAPI.dispatch(
      loginUser({
        username: user.email,
        password: user.senha,
      }),
    );

    return true;
  } catch (error) {
    const errorData = error as ErrorData;
    return thunkAPI.rejectWithValue(errorData.message);
  }
});

export const updateDataUser = createAsyncThunk('user/update', async (user: UserRegister, thunkAPI) => {
  try {
    await updateUser(user);
    const dataUser = await getUser();

    return dataUser;
  } catch (error) {
    const errorData = error as ErrorData;
    return thunkAPI.rejectWithValue(errorData.message);
  }
});

export const transactionPurchases = createAsyncThunk('user/transactionPurchases', async (_, thunkAPI) => {
  try {
    const data = await getTransactionPurchases();

    return data;
  } catch (error) {
    const errorData = error as ErrorData;
    return thunkAPI.rejectWithValue(errorData.message);
  }
});

export const transactionSales = createAsyncThunk('user/transactionSales', async (_, thunkAPI) => {
  try {
    const data = await getTransactionSales();

    return data;
  } catch (error) {
    const errorData = error as ErrorData;
    return thunkAPI.rejectWithValue(errorData.message);
  }
});

export const purchasesUser = createAsyncThunk('user/purchases', async (purchaseData: DataPurchase, thunkAPI) => {
  try {
    await postPurchases(purchaseData);

    return true;
  } catch (error) {
    const errorData = error as ErrorData;
    return thunkAPI.rejectWithValue(errorData.message);
  }
});

export const productsAnnounced = createAsyncThunk('user/productsAnnounced', async (id: string, thunkAPI) => {
  try {
    const products = await getProductsAnnounced(id);

    return products;
  } catch (error) {
    const errorData = error as ErrorData;
    return thunkAPI.rejectWithValue(errorData.message);
  }
});

export const logout = createAsyncThunk('user/logout', async () => {
  localStorage.removeItem('token');
});

const initialState: InitialStateUser = {
  loading: false,
  error: null,
  data: {
    information: null,
    transaction: {
      purchases: [],
      sales: [],
    },
    productsAnnounced: [],
  },
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // LOGIN
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.data.information = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
        state.data.information = null;
        state.data.productsAnnounced = [];
        state.data.transaction.purchases = [];
        state.data.transaction.sales = [];
      })
      // REGISTER
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.error = null;
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      })
      // UPDATE
      .addCase(updateDataUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateDataUser.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.data.information = action.payload;
      })
      .addCase(updateDataUser.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      })
      // TRANSACTION PURCHASE
      .addCase(transactionPurchases.pending, (state) => {
        state.loading = true;
      })
      .addCase(transactionPurchases.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data.transaction.purchases = action.payload;
      })
      .addCase(transactionPurchases.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.data.transaction.purchases = [];
      })
      // TRANSACTION SALES
      .addCase(transactionSales.pending, (state) => {
        state.loading = true;
      })
      .addCase(transactionSales.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data.transaction.sales = action.payload;
      })
      .addCase(transactionSales.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.data.transaction.sales = [];
      })
      // POST PURCHASES USER
      .addCase(purchasesUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(purchasesUser.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(purchasesUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.data.transaction.purchases = [];
      })
      // PRODUCTS ANNOUNCED
      .addCase(productsAnnounced.pending, (state) => {
        state.loading = true;
      })
      .addCase(productsAnnounced.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data.productsAnnounced = action.payload;
      })
      .addCase(productsAnnounced.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.data.productsAnnounced = [];
      })
      // LOGOUT
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.data.information = null;
        state.data.productsAnnounced = [];
        state.data.transaction.purchases = [];
        state.data.transaction.sales = [];
      });
  },
});

export default user.reducer;

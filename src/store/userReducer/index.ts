/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  DataPurchase, ErrorData, Transaction, UserGetToken, UserInformation, UserRegister,
} from '../../types';
import {
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
}

export interface InitialStateUser {
  loading: boolean
  error: string | null
  data: UserData
}

export const userLogin = createAsyncThunk('user/loginGet', async (user: UserGetToken, thunkAPI) => {
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

export const userDataAutomatic = createAsyncThunk('user/loginAutomaticGet', async (_, thunkAPI) => {
  try {
    await validateToken();

    const dataUser = await getUser();
    return dataUser;
  } catch (error) {
    localStorage.removeItem('token');
    const errorData = error as ErrorData;
    return thunkAPI.rejectWithValue(errorData.message);
  }
});

export const userRegister = createAsyncThunk('user/registerPost', async (user: UserRegister, thunkAPI) => {
  try {
    await postUser(user);
    await thunkAPI.dispatch(
      userLogin({
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

export const userUpdate = createAsyncThunk('user/dataUpdate', async (user: UserRegister, thunkAPI) => {
  try {
    await updateUser(user);
    const dataUser = await getUser();

    return dataUser;
  } catch (error) {
    const errorData = error as ErrorData;
    return thunkAPI.rejectWithValue(errorData.message);
  }
});

export const userTransactionPurchases = createAsyncThunk('user/transactionPurchasesGet', async (_, thunkAPI) => {
  try {
    const data = await getTransactionPurchases();

    return data;
  } catch (error) {
    const errorData = error as ErrorData;
    return thunkAPI.rejectWithValue(errorData.message);
  }
});

export const userTransactionSales = createAsyncThunk('user/transactionSalesGet', async (_, thunkAPI) => {
  try {
    const data = await getTransactionSales();

    return data;
  } catch (error) {
    const errorData = error as ErrorData;
    return thunkAPI.rejectWithValue(errorData.message);
  }
});

export const userTransaction = createAsyncThunk(
  'user/transactionPost',
  async (purchaseData: DataPurchase, thunkAPI) => {
    try {
      await postPurchases(purchaseData);

      return true;
    } catch (error) {
      const errorData = error as ErrorData;
      return thunkAPI.rejectWithValue(errorData.message);
    }
  },
);

export const userLogout = createAsyncThunk('user/logout', async () => {
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
  },
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // LOGIN
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.data.information = action.payload;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
        state.data.information = null;
        state.data.transaction.purchases = [];
        state.data.transaction.sales = [];
      })
      // REGISTER
      .addCase(userRegister.pending, (state) => {
        state.loading = true;
      })
      .addCase(userRegister.fulfilled, (state) => {
        state.error = null;
        state.loading = false;
      })
      .addCase(userRegister.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      })
      // LOGIN AUTOMATIC
      .addCase(userDataAutomatic.pending, (state) => {
        state.loading = true;
      })
      .addCase(userDataAutomatic.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.data.information = action.payload;
      })
      .addCase(userDataAutomatic.rejected, (state) => {
        state.loading = false;
        state.data.information = null;
        state.data.transaction.purchases = [];
        state.data.transaction.sales = [];
      })
      // UPDATE
      .addCase(userUpdate.pending, (state) => {
        state.loading = true;
      })
      .addCase(userUpdate.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.data.information = action.payload;
      })
      .addCase(userUpdate.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      })
      // TRANSACTION PURCHASE
      .addCase(userTransactionPurchases.pending, (state) => {
        state.loading = true;
      })
      .addCase(userTransactionPurchases.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data.transaction.purchases = action.payload;
      })
      .addCase(userTransactionPurchases.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.data.transaction.purchases = [];
      })
      // TRANSACTION SALES
      .addCase(userTransactionSales.pending, (state) => {
        state.loading = true;
      })
      .addCase(userTransactionSales.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data.transaction.sales = action.payload;
      })
      .addCase(userTransactionSales.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.data.transaction.sales = [];
      })
      // POST TRANSACTION
      .addCase(userTransaction.pending, (state) => {
        state.loading = true;
      })
      .addCase(userTransaction.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(userTransaction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // LOGOUT
      .addCase(userLogout.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.data.information = null;
        state.data.transaction.purchases = [];
        state.data.transaction.sales = [];
      });
  },
});

export default user.reducer;

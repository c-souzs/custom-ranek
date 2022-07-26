/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../services/api';

interface ErrorData {
  code: string
  data: { message: number }
  message: string
}

interface UserGetToken {
  username: string
  password: string
}

interface GetTokenResponse {
  token: string
  user_email: string
  user_nicename: string
  user_display_name: string
}

interface UserInformation {
  id: string
  nome: string
  email: string
  cep: string
  numero: string
  rua: string
  bairro: string
  cidade: string
  estado: string
}

interface Transaction {
  comprador_id: string
  vendedor_id: string
  endereco: UserInformation
  produto: {
    id: string
    fotos: { titulo: string; src: string }[]
  }
  data: string
}

interface Product {
  id: string
  fotos: { titulo: string; src: string }[] | null
  nome: string
  preco: string
  descricao: string
  vendido: string
  usuario_id: string
}

interface UserData {
  information: UserInformation | null
  transaction: {
    sales: Transaction[] | null
    purchases: Transaction[] | null
  }
  productsAnnounced: Product[]
}

interface UserRegister {
  nome: string
  email: string
  senha: string
  cep: string
  numero: string
  rua: string
  bairro: string
  cidade: string
  estado: string
}

interface InitiaStateUser {
  loading: boolean
  error: string | null
  userData: UserData
}

interface Product {
  id: string
  fotos:
    | {
        titulo: string
        src: string
      }[]
    | null
  nome: string
  preco: string
  descricao: string
  vendido: string
  usuario_id: string
}

interface DataPurchase {
  comprador_id: string
  vendedor_id: string
  produto: Product
  endereco: UserInformation
}

// Pega o token e salva no local storage
const getToken = async (user: UserGetToken): Promise<GetTokenResponse> => {
  const { data } = await api.token<GetTokenResponse, UserGetToken>(user);
  const { token } = data;
  localStorage.setItem('token', token);

  return data;
};

// Validata o token
const validateToken = async (): Promise<void> => {
  await api.validateToken();
};

// Puxa o usuário
const getUser = async (): Promise<UserInformation> => {
  const { data } = await api.get<UserInformation>('/usuario');

  return data;
};

// Cria um novo usuário
const postUser = async (user: UserRegister): Promise<void> => {
  await api.post<unknown, UserRegister>('/usuario', user);
};

const userUpdate = async (user: UserRegister): Promise<void> => {
  await api.put<unknown, UserRegister>('/usuario', user);
};

const getTransactionPurchases = async (): Promise<Transaction[]> => {
  const { data } = await api.get<Transaction[]>('transacao?tipo=comprador_id');

  return data;
};

const getTransactionSales = async (): Promise<Transaction[]> => {
  const { data } = await api.get<Transaction[]>('transacao?tipo=vendedor_id');

  return data;
};

const postPruchase = async (purchaseData: DataPurchase): Promise<void> => {
  await api.post<unknown, DataPurchase>('transacao', purchaseData);
};

const getProductsAnnounced = async (id: string): Promise<Product[]> => {
  const { data } = await api.get<Product[]>(`/produto?usuario_id=${id}`);

  return data;
};
// Recebe o dado do usuário e repassa para a função que puxa o token e salva no local storage
// Após o token puxado, ele é validado na api. Caso tenha alguma erro o processo de login é
// interrompido e o local storage é limpo
// Com o token puxado e validado, o sistema busca os dado do usuário
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

export const registerUser = createAsyncThunk('user/Register', async (user: UserRegister, thunkAPI) => {
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

export const updateUser = createAsyncThunk('user/update', async (user: UserRegister, thunkAPI) => {
  try {
    await userUpdate(user);
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

export const purchasesUser = createAsyncThunk('user/purchase', async (purchaseData: DataPurchase, thunkAPI) => {
  try {
    await postPruchase(purchaseData);

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

const initialState: InitiaStateUser = {
  loading: false,
  error: null,
  userData: {
    information: null,
    transaction: {
      purchases: null,
      sales: null,
    },
    productsAnnounced: [],
  },
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    reset: (state) => {
      state.error = null;
      state.loading = false;
      state.userData.information = null;
      state.userData.transaction.purchases = null;
      state.userData.transaction.sales = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // LOGIN USER
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.userData.information = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
        state.userData.information = null;
        state.userData.transaction.purchases = null;
        state.userData.transaction.sales = null;
      })
      // REGISTER USER
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
        state.userData.information = null;
        state.userData.transaction.purchases = null;
        state.userData.transaction.sales = null;
      })
      // UPDATE USER
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.userData.information = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
        state.userData.information = null;
        state.userData.transaction.purchases = null;
        state.userData.transaction.sales = null;
      })
      // GET TRANSACTION PURCHASES USER
      .addCase(transactionPurchases.pending, (state) => {
        state.loading = true;
      })
      .addCase(transactionPurchases.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.userData.transaction.purchases = action.payload;
      })
      .addCase(transactionPurchases.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.userData.transaction.purchases = null;
      })
      // GET TRANSACTION SALES USER
      .addCase(transactionSales.pending, (state) => {
        state.loading = true;
      })
      .addCase(transactionSales.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.userData.transaction.sales = action.payload;
      })
      .addCase(transactionSales.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.userData.transaction.purchases = null;
      })
      // POST PURCHASE USER
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
        state.userData.transaction.purchases = null;
      })
      // GET PRODUCTS ANNOUNCED USER
      .addCase(productsAnnounced.pending, (state) => {
        state.loading = true;
      })
      .addCase(productsAnnounced.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.userData.productsAnnounced = action.payload;
      })
      .addCase(productsAnnounced.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.userData.transaction.purchases = null;
      });
  },
});

export default user.reducer;

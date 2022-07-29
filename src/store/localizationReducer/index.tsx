/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCep, getCitys } from './localizationService';

interface DataLocalization {
  cepFormat: string | null
  uf: string | null
  citys: string[]
}

interface InitialStateLocalization {
  loading: boolean
  error: string | null
  data: DataLocalization
}

const initialState: InitialStateLocalization = {
  loading: false,
  error: null,
  data: {
    cepFormat: null,
    uf: null,
    citys: [],
  },
};

export const getLocalization = createAsyncThunk('localization/getLocalization', async (cep: string, thunkAPI) => {
  try {
    const { cep: cepFormat, uf } = await getCep(cep);
    const citys = await getCitys(uf);

    return { uf, cepFormat, citys };
  } catch (error) {
    return thunkAPI.rejectWithValue('Erro ao buscar dados da localização. Verifique o cep ou tente mais tarde.');
  }
});

const localization = createSlice({
  name: 'localization',
  initialState,
  reducers: {
    reset: (state) => {
      state.data.cepFormat = null;
      state.data.uf = null;
      state.data.citys = [];
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getLocalization.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getLocalization.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data.cepFormat = action.payload.cepFormat;
        state.data.uf = action.payload.uf;
        state.data.citys = action.payload.citys;
      })
      .addCase(getLocalization.rejected, (state, action) => {
        const errorMessage = action.payload as string;

        state.loading = false;
        state.error = errorMessage;
        state.data.cepFormat = null;
        state.data.uf = null;
        state.data.citys = [];
      });
  },
});

export const { reset } = localization.actions;
export default localization.reducer;

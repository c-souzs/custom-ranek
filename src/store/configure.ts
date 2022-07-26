import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productReducer';
import userReducer from './userReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;

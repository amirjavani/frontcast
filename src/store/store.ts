import { configureStore } from "@reduxjs/toolkit";
import authSlice from './authSlice';
import orderSlice from './orderSlice';

export const store = configureStore({ reducer: {
    authentication:authSlice,
    orders:orderSlice,
} });



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
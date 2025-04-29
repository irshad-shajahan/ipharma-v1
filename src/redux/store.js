import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { apiSlice } from './features/api/apiSlice';
import { languageSlice } from './features/languageSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    language:languageSlice.reducer
  },
  middleware: (getDefaultMiddleware) => {
  return  getDefaultMiddleware().concat(apiSlice.middleware);
  },
});


setupListeners(store.dispatch)
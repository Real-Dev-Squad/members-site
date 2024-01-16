import { createWrapper } from 'next-redux-wrapper';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import superUserOptionsReducer from './superUserOptions';
import keyboardReducer from './keyboard';
import globalReducer from './global';
import { serverApi } from '../services/serverApi';

const createStore = () =>
  configureStore({
    reducer: {
      [serverApi.reducerPath]: serverApi.reducer,
      superUserOption: superUserOptionsReducer,
      keyboard: keyboardReducer,
      global: globalReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(serverApi.middleware),
  });

export const store = createStore();
export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = ReturnType<typeof store.dispatch>;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
export const wrapper = createWrapper<AppStore>(createStore);

import { configureStore, Store } from "@reduxjs/toolkit";
import { serverApi } from "../services/serverApi";
import { createWrapper,  } from "next-redux-wrapper";

const createStore = () => configureStore({
    reducer: {
      [serverApi.reducerPath]: serverApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(serverApi.middleware),
  
});

const store = createStore();
export type AppDispatch = ReturnType<typeof store.dispatch>
export type RootState = ReturnType<typeof store.getState>;
export const wrapper = createWrapper<Store>(createStore);
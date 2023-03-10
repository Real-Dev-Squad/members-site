import { createWrapper,  } from "next-redux-wrapper";
import { configureStore, ThunkAction, Action} from "@reduxjs/toolkit";
import { serverApi } from "../services/serverApi";

const createStore = () => configureStore({
    reducer: {
      [serverApi.reducerPath]: serverApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(serverApi.middleware),
  
});

const store = createStore();
export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = ReturnType<typeof store.dispatch>
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>
export const wrapper = createWrapper<AppStore>(createStore);

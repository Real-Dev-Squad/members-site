import { createSlice } from '@reduxjs/toolkit';

interface globalState {
  isLoggedIn: boolean;
}

const initialState: globalState = {
  isLoggedIn: false,
};

export const global = createSlice({
  name: 'global',
  initialState: initialState,
  reducers: {
    setIsLoggedIn: (state, { payload: { isLoggedIn } }) => {
      state.isLoggedIn = isLoggedIn;
    },
  },
});

export const { setIsLoggedIn } = global.actions;

export default global.reducer;

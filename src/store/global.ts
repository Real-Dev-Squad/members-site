import { createSlice } from '@reduxjs/toolkit';
import { RolesType } from '../components/MembersSectionNew/types/MembersSection.type';

interface globalState {
  isLoggedIn: boolean;
  first_name: string | null;
  imageURL: string | null;
  roles: RolesType | null;
}

const initialState: globalState = {
  isLoggedIn: false,
  first_name: null,
  imageURL: null,
  roles: null,
};

export const global = createSlice({
  name: 'global',
  initialState: initialState,
  reducers: {
    setIsLoggedIn: (state, { payload: { isLoggedIn } }) => {
      state.isLoggedIn = isLoggedIn;
    },
    setUserData: (state, { payload: { first_name, imageURL, roles } }) => {
      state.first_name = first_name;
      state.imageURL = imageURL;
      state.roles = roles;
    },
  },
});

export const { setIsLoggedIn, setUserData } = global.actions;

export default global.reducer;

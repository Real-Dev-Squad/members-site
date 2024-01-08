import { createSlice } from '@reduxjs/toolkit'
import { RolesType } from '../components/MembersSectionNew/types/MembersSection.type'

interface globalState {
   isLoggedIn: boolean
   firstName: string | null
   imageURL: string | null
   roles: RolesType | null
}

const initialState: globalState = {
   isLoggedIn: false,
   firstName: null,
   imageURL: null,
   roles: null,
}

export const global = createSlice({
   name: 'global',
   initialState: initialState,
   reducers: {
      setIsLoggedIn: (state, { payload: { isLoggedIn } }) => {
         state.isLoggedIn = isLoggedIn
      },
      setUserData: (state, { payload: { firstName, imageURL, roles } }) => {
         state.firstName = firstName
         state.imageURL = imageURL
         state.roles = roles
      },
   },
})

export const { setIsLoggedIn, setUserData } = global.actions

export default global.reducer

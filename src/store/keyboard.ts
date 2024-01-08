import { createSlice } from '@reduxjs/toolkit'

interface keyboardstate {
  isOptionKeyPressed: boolean
}

const initialState: keyboardstate = {
  isOptionKeyPressed: false,
}

export const keyboard = createSlice({
  name: 'keyboard',
  initialState: initialState,
  reducers: {
    setIsOptionKeyPressed: (state, { payload: { optionKeyPressed } }) => {
      state.isOptionKeyPressed = optionKeyPressed
    },
  },
})

export const { setIsOptionKeyPressed } = keyboard.actions

export default keyboard.reducer

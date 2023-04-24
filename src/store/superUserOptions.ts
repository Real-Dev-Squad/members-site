import { createSlice } from "@reduxjs/toolkit";

interface superUserOptionsState {
  isUserRoleUpdateModalVisible: boolean;
  userId: string | null;
  isTaskUpdateModalVisible: boolean;
  taskId: string | null;
}

const initialState: superUserOptionsState = {
  isUserRoleUpdateModalVisible: false,
  userId: null,
  isTaskUpdateModalVisible: false,
  taskId: null,
}

export const superUserOptions = createSlice({
  name: 'superUserOptions',
  initialState: initialState,
  reducers: {
    setIsUserRoleUpdateModalVisible: (state, { payload: { visibility, userId } }) => {
      state.isUserRoleUpdateModalVisible = visibility
      state.userId = userId
    },
    setIsTaskUpdateModalVisible: (state, { payload: { visibility, taskId } }) => {
      state.isTaskUpdateModalVisible = visibility,
      state.taskId = taskId
    }
  }
})

export const {
  setIsUserRoleUpdateModalVisible,
  setIsTaskUpdateModalVisible
} = superUserOptions.actions;

export default superUserOptions.reducer;
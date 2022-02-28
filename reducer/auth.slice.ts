import { createSlice } from '@reduxjs/toolkit';
const initialState: any = null;
const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUserInfo() {
      return null;
    },
    setUserInfo(state: any, action) {
      const tmp = { ...(state || {}) };
      for (const i in action.payload) {
        tmp[i] = action.payload[i];
      }
      return tmp;
    },
  },
});

export const { setUserInfo, clearUserInfo } = authSlice.actions;

export default authSlice.reducer;

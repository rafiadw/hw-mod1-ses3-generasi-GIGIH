import { createSlice } from "@reduxjs/toolkit";


const initialState: {isLogin: boolean,
  accessToken: string,
  userStore: object}= {
  isLogin: false,
  accessToken: "",
  userStore: {},
};

const tokenSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLogin = true;
      state.accessToken = action.payload;
    },
    logout: () => initialState,
    profile: (state, action) => {
      state.userStore = action.payload;
    },
  },
});

export const { login, logout, profile } = tokenSlice.actions;

export default tokenSlice.reducer;

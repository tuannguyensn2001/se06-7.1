import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  user: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin(state, action) {
      const { user, access_token } = action.payload;

      state.isAuth = true;
      state.user = user;

      localStorage.setItem("token", access_token);
    },
    setLogout(state, action) {
      state.isAuth = false;
      state.user = {};

      localStorage.removeItem("token");
    },
    setMe(state, action) {
      const user = action.payload;

      state.isAuth = true;
      state.user = user;
    },
  },
});

export const { setLogin, setLogout, setMe } = authSlice.actions;

export default authSlice.reducer;

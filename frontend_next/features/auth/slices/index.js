import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

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

      Cookies.set("token", access_token);
    },
    setLogout(state, action) {
      state.isAuth = false;
      state.user = {};

      Cookies.remove("token");
    },
    setMe(state, action) {
      const user = action.payload;

      state.isAuth = true;
      state.user = user;
    },
  },
});

export const { setLogin, setLogout, setMe } = authSlice.actions;

const authReducer = authSlice.reducer;

export default authReducer;

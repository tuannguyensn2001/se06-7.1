import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import authReducer from "@/features/auth/slices";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;

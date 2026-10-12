import { configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "./slices/UserSlice";

export const Store = configureStore({
  reducer: {
    user: UserSlice
  }
})
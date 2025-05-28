import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./Slices/Authentication.Slices";
import { AdminSlice } from "./Slices/Admin.Slice";

export const Store = configureStore({
  reducer: {
    AuthData: AuthSlice,
    AdminData: AdminSlice
  }
})
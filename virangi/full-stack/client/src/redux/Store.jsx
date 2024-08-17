import { configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "./slices/UserSelice";

export const store = configureStore({
  reducer: {
    UserStore: UserSlice,
  },
});

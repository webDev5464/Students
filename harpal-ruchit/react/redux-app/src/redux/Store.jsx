import { configureStore } from "@reduxjs/toolkit";
import { MySlice } from "./slices/MySlice";

export const Store = configureStore({
  reducer: {
    MainSlice: MySlice
  }
})
import { configureStore } from "@reduxjs/toolkit";
import { SliceHandler } from "./slices/SliceHandler";

export const Store = configureStore({
  reducer: {
    Counter: SliceHandler
  }
})
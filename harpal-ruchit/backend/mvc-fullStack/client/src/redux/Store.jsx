import { configureStore } from "@reduxjs/toolkit"
import { Slice } from "./slices/User.slice"

export const Store = configureStore({
  reducer: {
    userSlice: Slice
  }
})
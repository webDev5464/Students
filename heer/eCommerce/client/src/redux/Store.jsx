import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './slice/userSlice'

export const Store = configureStore({
  reducer: {
    user: userSlice
  }
})

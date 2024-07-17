import { configureStore } from '@reduxjs/toolkit'
import { MySlice } from './Slice'

export const Store = configureStore({
  reducer: {
    MySliceProvider: MySlice
  }
})

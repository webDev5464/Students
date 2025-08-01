/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "counter",

  initialState: {
    num: 0
  },

  reducers: {
    increment: (state) => {
      state.num += 1
    },

    decrement: (state) => {
      state.num == 0 ? state.num : state.num -= 1
    }
  },

  extraReducers: () => { }
})

export const SliceHandler = slice.reducer
export const { increment, decrement } = slice.actions

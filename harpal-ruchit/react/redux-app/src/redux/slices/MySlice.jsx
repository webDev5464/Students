/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "MySlice",

  initialState: {
    num: 0
  },

  reducers: {
    increment: (state, action) => {
      state.num += action.payload
    }
  },

  extraReducers: () => { }
})

export const MySlice = slice.reducer
export const { increment } = slice.actions
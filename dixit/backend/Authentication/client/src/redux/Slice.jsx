/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./ThunkApi";

const Slice = createSlice({
  name: 'mySlice',

  initialState: {
    num: 0,
    process: false,
    message: '',
    loader: false,
    userData: null
  },

  reducers: {
    increment: (state) => {
      state.num += 1;
    },

    decrement: (state) => {
      if (state.num > 0) {
        state.num -= 1;
      }
    }
  },

  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state, action) => {
      state.loader = true
    })
    builder.addCase(loginUser.fulfilled, (state, action) => {
      const { message, process, data } = action.payload
      state.loader = false
      state.message = message
      state.userData = data
    })
    builder.addCase(loginUser.rejected, (state, action) => {
      state.message = action.message
    })
  }
})

export const MySlice = Slice.reducer
export const { increment, decrement } = Slice.actions

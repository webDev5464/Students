/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";
import { UserRegisterHandler } from "../thunk/UserThunk";

const Slice = createSlice({
  name: "UserSlice",
  initialState: {
    num: 0,
    loading: false,
    process: null,
    msg: "",
  },

  reducers: {
    increment: (state) => {
      state.num += 1;
    },
    decrement: (state) => {
      state.num > 0 ? (state.num -= 1) : 0;
    },
    resetMsg: (state) => {
      state.msg = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(UserRegisterHandler.pending, (state) => {
        state.loading = true;
      })
      .addCase(UserRegisterHandler.fulfilled, (state, action) => {
        state.loading = false;
        state.process = action.payload.process;
        state.msg = action.payload.msg;
      });
  },
});

export const UserSlice = Slice.reducer;
export const { increment, decrement, resetMsg } = Slice.actions;

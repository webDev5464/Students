/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";
import { UseLoginHandler } from "./UserAPIHandler";

const slice = createSlice({
  name: "User",
  initialState: {
    loading: false,
    user: "Chagan",
    num: 0,
    resMsg: "",
    userData: null,
    process: null,
    errorMsg: "",
  },

  reducers: {
    changeUser: (state, action) => {
      // state.user = "magan";
      state.user = action.payload;
    },

    increment: (state, action) => {
      state.num += 1;
    },

    decrement: (state) => {
      state.num > 0 ? (state.num -= 1) : 0;
    },

    resetPopup: (state) => {
      (state.resMsg = ""), (state.process = null);
    },
  },

  extraReducers: (bulder) => {
    bulder
      .addCase(UseLoginHandler.pending, (state) => {
        state.loading = true;
      })
      .addCase(UseLoginHandler.fulfilled, (state, action) => {
        const { process, msg, UserData } = action.payload;
        state.loading = false;
        state.resMsg = msg;
        state.userData = UserData;
        state.process = process;
      })
      .addCase(UseLoginHandler.rejected, (state, action) => {
        state.resMsg = action.error.message;
      });
  },
});

export const UserSlice = slice.reducer;
export const { changeUser, increment, decrement, resetPopup } = slice.actions;

/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";
import {
  loginHandler,
  registerHandler,
  userLogout,
  userVerify,
} from "../thunk/UserApiThunk";

const slice = createSlice({
  name: "UserSlice",

  initialState: {
    Username: "Magan",
    num: 0,
    process: false,
    msg: "",
    loading: false,
    UserData: null,
    loginProcess: false,
  },

  reducers: {
    changeValue: (state, action) => {
      state.Username = action.payload;
    },

    increment: (state) => {
      state.num += 1;
    },

    decrement: (state) => {
      state.num -= 1;
    },

    resetMsg: (state) => {
      state.msg = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(registerHandler.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(registerHandler.fulfilled, (state, action) => {
        const { process, msg } = action.payload;
        state.loading = false;
        state.process = process;
        state.msg = msg;
      })
      .addCase(registerHandler.rejected, (state, action) => {
        const { process, msg } = action.payload;
        state.loading = false;
        state.process = process;
        state.msg = msg;
      });

    builder
      .addCase(loginHandler.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginHandler.fulfilled, (state, action) => {
        const { process, msg, userData } = action.payload;
        state.loading = false;
        if (process) {
          state.UserData = userData;
          state.loginProcess = process;
        }
        state.process = process;
      })
      .addCase(loginHandler.rejected, (state, action) => {
        const { process, msg } = action.payload;
        state.loading = false;
        state.process = process;
        state.msg = msg;
      });

    builder
      .addCase(userVerify.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(userVerify.fulfilled, (state, action) => {
        console.log(action);
        const { process, msg, userData } = action.payload;
        state.loading = false;
        if (process) {
          state.UserData = userData;
          state.loginProcess = process;
        }
        state.UserData = null;
        state.process = process;
      })
      .addCase(userVerify.rejected, (state, action) => {
        const { process, msg } = action.payload;
        state.loading = false;
        state.process = process;
        state.msg = msg;
      });

    builder
      .addCase(userLogout.pending, (state) => {
        state.loading = true;
      })
      .addCase(userLogout.fulfilled, (state, action) => {
        state.loading = false;
        state.UserData = null;
        state.loginProcess = false;
      });
  },
});

export const UserSlice = slice.reducer;
export const { changeValue, increment, decrement, resetMsg } = slice.actions;

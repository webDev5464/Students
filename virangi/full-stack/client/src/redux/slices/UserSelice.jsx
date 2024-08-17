/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";
import { UserRegisterAPI } from "../thunk/UserThunkApi";

const slice = createSlice({
  name: "userSlice",
  initialState: {
    username: "Chagan",
    loading: false,
  },

  reducers: {
    changeUsername: (state, action) => {
      state.username = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(UserRegisterAPI.pending, (state) => {
        state.loading = true;
      })
      .addCase(UserRegisterAPI.fulfilled, (state, action) => {
        console.log(action);
        state.loading = false;
      })
      .addCase(UserRegisterAPI.rejected, (state, action) => {
        console.log(action);
        state.loading = false;
      });
  },
});

export const UserSlice = slice.reducer;
export const { changeUsername } = slice.actions;

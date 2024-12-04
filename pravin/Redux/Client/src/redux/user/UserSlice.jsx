import { createSlice } from "@reduxjs/toolkit";
import { AdminState, TestingFunction } from "../admin/AdminSlice";

const UserState = {
  ...AdminState,
  count: 0
}

const Slice = createSlice({
  name: "UserSlice",
  initialState: UserState,

  reducers: {
    incrementHandler: (state) => {
      state.count += 1
    }
  },
  extraReducers: (builder) => {

  }
})

export const UserSlice = Slice.reducer;
export const { incrementHandler } = Slice.actions;
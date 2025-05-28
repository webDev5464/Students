import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "AdminSlice",

  initialState: {
    adminLogin: false
  },

  reducers: {},

  extraReducers: () => { }
})

export const AdminSlice = Slice.reducer
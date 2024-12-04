import { createSlice } from "@reduxjs/toolkit";

export const AdminState = {
  Num: 0,
}

const Slice = createSlice({
  name: "AdminSlice",
  initialState: AdminState,

  reducers: {
    TestingFunction: (state) => {
      state.Num += 1
    }
  },

  extraReducers: (builder) => {
    builder.addCase(TestingFunction, (state) => {
      console.log(state.roll)
    })
  }
})

export const AdminSlice = Slice.reducer
export const { TestingFunction } = Slice.actions
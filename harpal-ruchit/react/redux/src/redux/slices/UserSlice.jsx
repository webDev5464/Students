import { createSlice } from "@reduxjs/toolkit";
import { getUsers, register } from "../thunk/UserThunk";

const slice = createSlice({
  name: "UserSlice",

  initialState: {
    num: 0,
    userData: [],
    loading: false,
    resMsg: ""
  },

  reducers: {
    increment: (state, action) => {
      state.num += action.payload
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false
        state.userData = action.payload
      })
      .addCase(getUsers.rejected, (state, action) => {
        console.log(action.payload.status)
        state.loading = false
      })


      .addCase(register.pending, (state) => {
        state.loading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        const { process, message } = action.payload
        console.log(action.payload)
        state.loading = false
        state.resMsg = message
      })
      .addCase(register.rejected, (state, action) => {
        const { process, message } = action.payload
        state.loading = false
        state.resMsg = message
      })
  }
})

export const UserSlice = slice.reducer
export const { increment } = slice.actions
/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "../thunk/UserThunk";

const slice = createSlice({
  name: 'userSlice',

  initialState: {
    loading: false,
    process: false,
    msg: "",
    userData: null
  },

  reducers: {
    resetMsg: (s) => {
      s.msg = ""
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (s) => {
        s.loading = true
      })
      .addCase(register.fulfilled, (s, a) => {
        const { msg, process } = a.payload
        console.log(a)
        s.loading = false
        s.process = process
        s.msg = msg
      })
      .addCase(register.rejected, (s, a) => {
        console.log(a.payload)
        const { msg, process } = a.payload
        s.loading = false
        s.process = process
        s.msg = msg
      })

      .addCase(login.pending, (s) => {
        s.loading = true
      })
      .addCase(login.fulfilled, (s, a) => {
        const { msg, process, userData } = a.payload
        s.loading = false
        s.process = process
        s.msg = msg
        s.userData = userData
      })
      .addCase(login.rejected, (s, a) => {
        console.log(a.payload)
        const { msg, process } = a.payload
        s.loading = false
        s.process = process
        s.msg = msg
      })
  }
})

export const UserSlice = slice.reducer
export const { resetMsg } = slice.actions
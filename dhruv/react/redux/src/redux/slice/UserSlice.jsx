/* eslint-disable react-refresh/only-export-components */
// npm i react-redux 
// npm i @reduxjs/toolkit

import { createSlice } from "@reduxjs/toolkit";
import { getUsers, postData } from "../thunk/Apis";

const Slice = createSlice({
  name: "UserSlice",

  initialState: {
    num: 0,
    userData: null,
    theme: "light",
    loading: false,
    msg: ''
  },

  reducers: {
    incrementHandler: (init, myVal) => {
      init.num += 1
    },

    decrementHandler: (a) => {
      a.num <= 0 ? a.num = 0 : a.num -= 1
    },

    themeHandler: (s) => {
      if (s.theme == "light") {
        s.theme = "dark"
        localStorage.setItem("theme", "dark")
      } else {
        s.theme = "light"
        localStorage.setItem("theme", "light")
      }
    },

    defaultThemeHandler: (s) => {
      const localTheme = localStorage.getItem("theme")
      if (localTheme) {
        s.theme = localTheme
      }
    },

    resetMsg: (s) => {
      s.msg = ""
    }
  },

  extraReducers: (builder) => {
    builder
      //! GetData
      .addCase(getUsers.pending, (s, a) => {
        s.loading = true
      })
      .addCase(getUsers.fulfilled, (s, a) => {
        s.loading = false
        s.userData = a.payload
      })
      .addCase(getUsers.rejected, (s, a) => {
        s.loading = false
      })

      //! PostData
      .addCase(postData.pending, (s) => {
        s.loading = true
      })
      .addCase(postData.fulfilled, (s, a) => {
        const { message } = a.payload
        s.loading = false
        s.msg = message
      })
      .addCase(postData.rejected, (s, a) => {
        console.log(a.payload)
        const { message } = a.payload
        s.loading = false
        s.msg = message
      })
  }
})

export const UserSlice = Slice.reducer
export const {
  incrementHandler,
  decrementHandler,
  themeHandler,
  defaultThemeHandler,
  resetMsg
} = Slice.actions

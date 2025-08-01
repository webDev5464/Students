import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "userSlice",
  initialState: {
    theme: "light"
  },
  reducers: {
    themeHandler(s) {
      if (s.theme == "light") {
        s.theme = "dark"
        localStorage.setItem("theme", "dark")
      } else {
        s.theme = "light"
        localStorage.setItem("theme", "light")
      }
    },

    autoTheme(s) {
      const getTheme = localStorage.getItem("theme")

      if (getTheme) {
        getTheme == "light" ? s.theme = "light" : s.theme = "dark"
      } else {
        s.theme = "light"
      }
    }
  },
  extraReducers: () => { }
})

export const userSlice = slice.reducer
export const { themeHandler, autoTheme } = slice.actions
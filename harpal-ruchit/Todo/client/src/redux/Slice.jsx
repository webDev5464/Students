import { createSlice } from "@reduxjs/toolkit";
import { deleteDataAPI, getDataAPI, postDataAPI } from "./Thunk";

const slice = createSlice({
  name: "slice",

  initialState: {
    load: false,
    process: false,
    todos: [],
    editUserId: ''
  },

  reducers: {
    resetProcess: (s) => {
      s.process = false
    },

    userInfoEdit: (s, a) => {
      s.editUserId = a.payload
    }
  },

  extraReducers: (b) => {
    b
      .addCase(postDataAPI.pending, (s) => {
        s.load = true
      })
      .addCase(postDataAPI.fulfilled, (s) => {
        s.load = false
        s.process = true
      })
      .addCase(postDataAPI.rejected, (s) => {
        s.load = false
        s.process = false
      })

      .addCase(getDataAPI.pending, (s) => {
        s.load = true
      })
      .addCase(getDataAPI.fulfilled, (s, a) => {
        s.load = false
        s.todos = a.payload
      })
      .addCase(getDataAPI.rejected, (s) => {
        s.load = false
      })

      .addCase(deleteDataAPI.pending, (s) => { s.load = true })
      .addCase(deleteDataAPI.fulfilled, (s) => { s.load = false, s.process = true })
      .addCase(deleteDataAPI.rejected, (s) => { s.load = false, s.process = false })
  }
})

export const Slice = slice.reducer
export const { resetProcess, userInfoEdit } = slice.actions
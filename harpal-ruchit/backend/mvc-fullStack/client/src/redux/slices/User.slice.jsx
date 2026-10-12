import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const getData = createAsyncThunk(
  "data/getData",
  async () => {
    const res = await axios.get("http://localhost:5050/api")
    console.log(res.data)
    return res.data
  }
)

export const deleteUser = createAsyncThunk(
  "data/delete",
  async ({ id }) => {
    console.log(id)
    const res = await axios.post("http://localhost:5050/api/delete", { id })
    console.log(res.data)
    return res.data
  }
)

const slice = createSlice({
  name: "counter",
  initialState: {
    data: [],
    process: false
  },
  reducers: {
    resetProcess: (s) => {
      s.process = false
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      state.data = action.payload
    })

    builder.addCase(deleteUser.fulfilled, (state) => {
      state.process = true
    })
  }
})

export const Slice = slice.reducer
export const { resetProcess } = slice.actions
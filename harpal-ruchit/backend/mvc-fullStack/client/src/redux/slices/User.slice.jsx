import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const getData = createAsyncThunk(
  "data/getData",
  async () => {
    const res = await axios.get("http://localhost:4040/api")
    console.log(res.data)
    return res.data
  }
)

export const deleteUser = createAsyncThunk(
  "data/delete",
  async ({ id }) => {
    console.log(id)
    const res = await axios.post("http://localhost:4040/api/delete", { id })
    console.log(res.data)
    return res.data
  }
)

const slice = createSlice({
  name: "counter",
  initialState: {
    data: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      state.data = action.payload
    })
  }
})

export const Slice = slice.reducer
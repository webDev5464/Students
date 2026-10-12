import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const postDataAPI = createAsyncThunk("post", async (_, { rejectWithValue }) => {
  try {
    console.log(_)
    const res = await axios.post("http://localhost:4040/", _)
    return res.data
  } catch (error) {
    return rejectWithValue(error.response.data)
  }
})

export const getDataAPI = createAsyncThunk("get", async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get("http://localhost:4040/")
    return res.data
  } catch (error) {
    return rejectWithValue(error.response.data)
  }
})

export const deleteDataAPI = createAsyncThunk("delete", async (id, { rejectWithValue }) => {
  try {
    const res = await axios.post("http://localhost:4040/delete", { id })
    return res.data
  } catch (error) {
    return rejectWithValue(error.response.data)
  }
})

export const editDataAPI = createAsyncThunk("edit", async (id, { rejectWithValue }) => {
  try {
    const res = await axios.put("http://localhost:4040/edit", id)
    return res.data
  } catch (error) {
    return rejectWithValue(error.response.data)
  }
})
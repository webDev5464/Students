import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const getUsers = createAsyncThunk("getUsers", async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get("https://authapiforfront.jatssdev.com/api/getusers")
    return res.data
  } catch (err) {
    console.log(err.response)
    rejectWithValue(err.response)
  }
})

export const register = createAsyncThunk("register", async (_, { rejectWithValue }) => {
  try {
    const res = await axios.post("https://authapiforfront.jatssdev.com/api/UserRegister", _)
    return res.data
  } catch (err) {
    return rejectWithValue(err.response.data)
  }
})
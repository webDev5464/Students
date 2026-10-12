import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("getUsers", async (_, { rejectWithValue }) => {
  try {
    const dataGet = await axios.get("https://authapiforfront.jatssdev.com/api/getusers")
    return dataGet.data // fulfilled
  } catch (err) {
    return rejectWithValue(err.response.data) // rejected
  }
})

export const postData = createAsyncThunk("postData", async (data, { rejectWithValue }) => {
  try {
    const res = await axios.post("https://authapiforfront.jatssdev.com/api/UserRegister", data)

    return res.data
  } catch (err) {
    return rejectWithValue(err.response.data)
  }
})
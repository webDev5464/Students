import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const register = createAsyncThunk(
  "register", async (formData, { rejectWithValue }) => {
    try {
      const res = await axios.post("http://localhost:8080/api/register", formData)
      console.log(res)
      return res.data
    } catch (err) {
      console.log(err)
      return rejectWithValue(err.response.data)
    }
  }
)

export const login = createAsyncThunk(
  "login", async (formData, { rejectWithValue }) => {
    try {
      const res = await axios.post("http://localhost:8080/api/login", formData)
      return res.data
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

export const editUser = createAsyncThunk(
  "editUser", async (formData, { rejectWithValue }) => {
    try {
      const res = await axios.post("http://localhost:8080/api/edit", formData)
      return res.data
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)
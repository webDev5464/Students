import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const serverApi = "http://localhost:8080";

export const registerHandler = createAsyncThunk(
  "registerHandler",
  async (formData, { rejectWithValue }) => {
    try {
      const apiResponse = await axios.post(`/user/register`, formData);
      return apiResponse.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const loginHandler = createAsyncThunk(
  "loginHandler",
  async (formData, { rejectWithValue }) => {
    try {
      const apiResponse = await axios.post(`/user/login`, formData);
      return apiResponse.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const userVerify = createAsyncThunk(
  "userVerify",
  async ({ rejectWithValue }) => {
    console.log("running");
    try {
      const apiResponse = await axios.get(`/user/tokenVerification`);
      return apiResponse.data;
    } catch (err) {
      console.log(38, err);
      return rejectWithValue(err.response);
    }
  }
);

export const userLogout = createAsyncThunk(
  "userLogout",
  async ({ rejectWithValue }) => {
    try {
      const apiResponse = await axios.get(`/user/logout`);
      return apiResponse.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

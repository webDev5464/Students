/* eslint-disable no-unused-vars */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const server = "http://localhost:9090";

export const UserRegisterAPI = createAsyncThunk(
  "UserRegisterAPI",
  async (formData, { rejectWithValue, dispatch }) => {
    try {
      const ApiResponse = await axios.post(`${server}/api/register`, formData);

      return ApiResponse.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

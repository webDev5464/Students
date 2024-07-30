import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const UseLoginHandler = createAsyncThunk(
  "UseLoginHandler",
  async (formData) => {
    const response = await axios.post(
      "http://localhost:4040/api/login",
      formData
    );
    return response.data;
  }
);

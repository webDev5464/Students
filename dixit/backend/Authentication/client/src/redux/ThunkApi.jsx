import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk('loginUser', async ({ formData }) => {
  const response = await axios.post('/api/login', formData)
  return response.data
})
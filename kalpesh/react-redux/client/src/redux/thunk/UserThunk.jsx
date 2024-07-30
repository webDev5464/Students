import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const UserRegisterHandler = createAsyncThunk(
  "UserRegisterHandler",
  async () => {
    const response = await axios.post("/api/register");
    return response.data;
  }
);

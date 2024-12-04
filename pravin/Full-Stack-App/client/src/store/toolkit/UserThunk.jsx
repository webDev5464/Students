import { createAsyncThunk } from "@reduxjs/toolkit";
import  axios  from "axios";
export const UserRegisterPost = createAsyncThunk(
  "UserRegisterPost",
  async (registered, { rejectWithValue }) => {
    try {
      const regUsers = await axios.post(
        "http://localhost:8000/api/register",
        registered
      );
      return regUsers;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const UserLoginPost = createAsyncThunk("UserLoginPost",
  async (logined , {rejectWithValue}) => {
    try {
     const userlogin = await axios.post("http://localhost:8000/api/login" , logined)
     return userlogin
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
) 

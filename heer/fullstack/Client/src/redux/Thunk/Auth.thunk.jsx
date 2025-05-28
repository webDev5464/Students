import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const $AuthRegister = createAsyncThunk(
    "AuthRegister", async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post("/api/UserRegister", formData)
            return response.data
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
)

export const $AuthLogin = createAsyncThunk(
    "AuthLogin", async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post("/api/UserLogin", formData)
            return response.data
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
)

export const $UserAuthToken = createAsyncThunk(
    "UserAuthToken", async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get("/api/UserAuthLogin")
            return response.data
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
)
export const $UserLogout = createAsyncThunk(
    "UserLogout", async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get("/api/UserLogout")
            return response.data
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
)
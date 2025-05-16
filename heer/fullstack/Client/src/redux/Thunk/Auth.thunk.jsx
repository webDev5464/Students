import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const $AuthRegister = createAsyncThunk(
    "AuthRegister", async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post("http://localhost:8080/api/UserRegister", formData)
            return response.data
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
)

export const $AuthLogin = createAsyncThunk(
    "AuthLogin", async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post("http://localhost:8080/api/UserLogin", formData)
            return response.data
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
)
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postData = createAsyncThunk("postData", async (formData, { rejectWithValue }) => {
    try {
        const res = await axios.post("/api", formData);
        return res.data
    } catch (error) {
        console.log(error.response.data);
        return rejectWithValue(error.response.data)
    }
})

export const loginData = createAsyncThunk("loginData", async (form, { rejectWithValue }) => {
    console.log(form);
    try {
        const res = await axios.post("/api/login", form);
        return res.data
    } catch (error) {
        // console.log(error.response.data);
        return rejectWithValue(error.response.data)
    }
})

export const getData = createAsyncThunk("getData", async (_, { rejectWithValue }) => {
    try {
        const res = await axios.get("/api");
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const loginToken = createAsyncThunk("loginToken", async (_, { rejectWithValue }) => {
    try {
        const res = await axios.get("/api/token");
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

import { createSlice } from "@reduxjs/toolkit";
import { getData } from "../thunk/registerDataThunk";
import { GlobState } from "./GlobState";

const slice = createSlice({
    name: "registerGetData",

    initialState:{
        g : false,
        ...GlobState
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
        .addCase(getData.pending,(state)=> {
            state.g = true
        })
        .addCase(getData.fulfilled,(state) => {
            state.g = false
        })
        .addCase(getData.rejected,(state) => {
            state.g = false
        })
    }
})

export const registerGetData = slice.reducer
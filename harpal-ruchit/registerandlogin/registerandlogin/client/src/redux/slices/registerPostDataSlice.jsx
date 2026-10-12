import { createSlice } from "@reduxjs/toolkit";
import { postData } from "../thunk/registerDataThunk";
import { GlobState } from "./GlobState";

const slice = createSlice({
    name: "registerPostData",

    initialState: {
        loading: false,
        process: false,
        ...GlobState
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(postData.pending, (state) => {
                state.loading = true
            })
            .addCase(postData.fulfilled, (state, action) => {
                console.log(action);
                state.loading = false
                console.log(action.payload.msg);
                state.process = true
            })
            .addCase(postData.rejected, (state, action) => {
                console.log(action)
                state.loading = false
                state.process = false
                // console.log(action.payload.msg);
            })

    }

})

export const registerPostData = slice.reducer
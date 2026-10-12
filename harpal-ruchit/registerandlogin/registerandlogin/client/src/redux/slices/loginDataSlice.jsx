import { createSlice } from "@reduxjs/toolkit";
import { loginData, loginToken } from "../thunk/registerDataThunk";
import { GlobState } from "./GlobState";

const slice = createSlice({
    name: "loginData",

    initialState: {
        user: null,
        login: false,
        error: null,
        userData: null,
        ...GlobState
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(loginData.pending, (state) => {
                state.login = true
            })
            .addCase(loginData.fulfilled, (state, action) => {
                const { data, process } = action.payload
                state.userLogin = true
                state.userData = data
                state.login = false
                // state.user = action.payload
            })
            .addCase(loginData.rejected, (state, action) => {
                state.login = false
                state.error = action.payload
                console.log(action);
            })

            .addCase(loginToken.pending, (state) => {
                state.login = true
            })
            .addCase(loginToken.fulfilled, (state, action) => {
                const { data, process } = action.payload
                state.userLogin = true
                state.userData = data
            })
            .addCase(loginToken.rejected, (state, action) => {
                state.login = false
                state.error = action.payload
                console.log(action);
            })
    }
})

export const logData = slice.reducer
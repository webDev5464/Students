/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";
import { $AuthLogin, $AuthRegister, $UserAuthToken, $UserLogout } from "../Thunk/Auth.thunk";
import { toast } from "react-toastify"

const Slice = createSlice({
    name: "AuthSlice",

    initialState: {
        loading: false,
        process: null,
        userData: null,
    },

    reducers: {

    },

    extraReducers: (builder) => {
        builder

            //! Auth Register
            .addCase($AuthRegister.pending, (state) => {
                state.loading = true

            })
            .addCase($AuthRegister.fulfilled, (state, action) => {
                const { message, process } = action.payload
                state.loading = false
                state.resMsg = message
                state.process = process
                toast.success(message, {
                    position: "bottom-right",
                    closeOnClick: true
                })
            })
            .addCase($AuthRegister.rejected, (state, action) => {
                const { message, process } = action.payload
                state.loading = false
                state.resMsg = message
                state.process = process
                toast.error(message, {
                    position: "bottom-right",
                    closeOnClick: true
                })
            })

            //! Auth Login 
            .addCase($AuthLogin.pending, (state) => {
                state.loading = true
            })
            .addCase($AuthLogin.fulfilled, (state, action) => {
                const { message, process, userData } = action.payload
                state.loading = false
                state.resMsg = message
                state.process = process
                state.userData = userData
                toast.success(message, {
                    position: "bottom-right",
                    closeOnClick: true
                })
            })
            .addCase($AuthLogin.rejected, (state, action) => {
                const { message, process } = action.payload
                console.log(action)
                state.loading = false
                state.resMsg = message
                state.process = process
                toast.error(message, {
                    position: "bottom-right",
                    closeOnClick: true
                })
            })

            //! Auto login
            .addCase($UserAuthToken.pending, (state) => {
                state.loading = true
            })
            .addCase($UserAuthToken.fulfilled, (state, action) => {
                const { message, data } = action.payload
                state.loading = false
                state.resMsg = message
                state.userData = data
                toast.success(message, {
                    position: "bottom-right",
                    closeOnClick: true
                })
            })
            .addCase($UserAuthToken.rejected, (state, action) => {
                const { message, process } = action.payload
                state.loading = false
                state.resMsg = message
                state.process = process
            })

            //! User Logout
            .addCase($UserLogout.pending, (state) => {
                state.loading = true
            })
            .addCase($UserLogout.fulfilled, (state, action) => {
                const { message } = action.payload
                state.loading = false
                state.userData = null
                toast.success(message, {
                    position: "bottom-right",
                    closeOnClick: true
                })
            })
            .addCase($UserLogout.rejected, (state, action) => {
                const { message, process } = action.payload
                state.loading = false
                state.resMsg = message
                state.process = process
            })
    }

})

export const AuthSlice = Slice.reducer
export const { increment, decrement } = Slice.actions

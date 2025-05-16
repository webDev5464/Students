import { createSlice } from "@reduxjs/toolkit";
import { $AuthLogin, $AuthRegister } from "../Thunk/Auth.thunk";
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
    }

})

export const AuthSlice = Slice.reducer
export const { increment, decrement } = Slice.actions

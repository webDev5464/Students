import { createSlice } from "@reduxjs/toolkit";

const slices = createSlice({
    name: 'Slices',

    initialState: {
        theme: "light",

    },
    reducers: {
        changetheme: (state) => {
            if (state.theme == "light") {
                state.theme = "dark";
                localStorage.setItem('theme', 'dark')

            } else {
                state.theme = "light";
                localStorage.setItem('theme', 'light')
            }
        },

        autoTheme(state){
            const getTheme = localStorage.getItem("theme")

            if (getTheme) {
                getTheme == "light" ? state.theme ="light" : state = "dark"
                
            } else {
                state.theme = "light"
                
            }
        }
    },
    extraReducers: () => { },

})

export const Slices = slices.reducer;
export const { changetheme , autoTheme } = slices.actions;  //exporting the action creator
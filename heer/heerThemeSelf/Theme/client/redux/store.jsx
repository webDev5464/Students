import { configureStore } from '@reduxjs/toolkit'
import { Slices } from './UserSlice'

export const store = configureStore({
    reducer: {
        user:Slices
    }

})
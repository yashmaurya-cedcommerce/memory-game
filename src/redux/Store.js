import { configureStore } from "@reduxjs/toolkit";
import gridReducer from './counterSlice'

export const store = configureStore({
    reducer: {
        grid: gridReducer
    }
})
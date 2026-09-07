import { configureStore } from "@reduxjs/toolkit";
import { consumersReducer } from "./consumersSlice";

export const store = configureStore({
    reducer:{
        consumers:consumersReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
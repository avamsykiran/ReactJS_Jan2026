import { configureStore } from "@reduxjs/toolkit";
import { consumersReducer } from "./consumersSlice";
import { itemsReducer } from "./itemsSlice";

export const store = configureStore({
    reducer:{
        consumers:consumersReducer,
        items:itemsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
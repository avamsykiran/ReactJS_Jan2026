import { createEntityAdapter, createSlice, isPending, isRejected, type PayloadAction } from "@reduxjs/toolkit";
import type { Consumer } from "../models/Consumer";
import { addConsumer, deleteConsumer, getAllConsumers, updateConsumer } from "./consumersThunks";

export const consumerEntityAdapter = createEntityAdapter<Consumer>({
    selectId: consumer => consumer.cid
})

type ConsumerSliceExtraFields = { status: "idle" | "pending" | "ok" | "error", errMsg: string | null };

const consumersSlice = createSlice({
    name: "consumersSlice",
    initialState:
        consumerEntityAdapter.getInitialState<ConsumerSliceExtraFields>(
            {
                status: "idle",
                errMsg: null
            }
        ),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllConsumers.fulfilled, (state, action: PayloadAction<Consumer[]>) => {
                consumerEntityAdapter.setAll(state, action.payload);
                state.status = "ok";
                state.errMsg = null;
            })
            .addCase(addConsumer.fulfilled, (state, action: PayloadAction<Consumer>) => {
                consumerEntityAdapter.addOne(state, action.payload);
                state.status = "ok";
                state.errMsg = null;
            })
            .addCase(updateConsumer.fulfilled, (state, action: PayloadAction<Consumer>) => {
                consumerEntityAdapter.setOne(state, action.payload);
                state.status = "ok";
                state.errMsg = null;
            })
            .addCase(deleteConsumer.fulfilled, (state, action: PayloadAction<number>) => {
                consumerEntityAdapter.removeOne(state, action.payload);
                state.status = "ok";
                state.errMsg = null;
            })
            .addMatcher(
                isPending(getAllConsumers, addConsumer, updateConsumer, deleteConsumer),
                (state, _action) => {
                    state.status = "pending";
                    state.errMsg = null;
                }
            )
            .addMatcher(
                isRejected(getAllConsumers, addConsumer, updateConsumer, deleteConsumer),
                (state, action) => {
                    state.status = "error";
                    state.errMsg = "Action failed! Please retry later! Inconvinience regrated";
                    console.log(action.payload);
                }
            )
    }
});

//Slice Reducer
export const consumersReducer = consumersSlice.reducer;

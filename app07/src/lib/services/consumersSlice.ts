import { createEntityAdapter, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Consumer } from "../models/Consumer";

export const consumerEntityAdapter = createEntityAdapter<Consumer>({
    selectId: consumer => consumer.cid
})

const consumersSlice = createSlice({
    name: "consumersSlice",
    initialState: consumerEntityAdapter.getInitialState(
        {
            nextId: 5
        },
        [
            { cid: 1, fullName: "Vamsy", mobile: "9052224753", mailId: "vamsy@gmail.com" },
            { cid: 2, fullName: "Murthy", mobile: "9052224752", mailId: "murthy@gmail.com" },
            { cid: 3, fullName: "Suresh", mobile: "9052224751", mailId: "suresh@gmail.com" },
            { cid: 4, fullName: "Ramesh", mobile: "9052224750", mailId: "ramesh@gmail.com" }
        ]
    ),
    reducers: {
        addConsumer: (state, action: PayloadAction<Consumer>) => {
            let consumer = action.payload;
            consumer.cid = state.nextId;
            consumerEntityAdapter.addOne(state,consumer);
            state.nextId = state.nextId + 1;
        },
        updateConsumer: consumerEntityAdapter.setOne,
        deleteConsumer: consumerEntityAdapter.removeOne,
    }
});

//Slice Reducer
export const consumersReducer = consumersSlice.reducer;

//Actions related to thsi Slice
export const { addConsumer, deleteConsumer, updateConsumer } = consumersSlice.actions; 

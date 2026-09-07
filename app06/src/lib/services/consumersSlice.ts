import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Consumer } from "../models/Consumer";

const consumersSlice = createSlice({
    name: "consumersSlice",
    initialState: {
        consumers: [
            { cid: 1, fullName: "Vamsy", mobile: "9052224753", mailId: "vamsy@gmail.com" },
            { cid: 2, fullName: "Murthy", mobile: "9052224752", mailId: "murthy@gmail.com" },
            { cid: 3, fullName: "Suresh", mobile: "9052224751", mailId: "suresh@gmail.com" },
            { cid: 4, fullName: "Ramesh", mobile: "9052224750", mailId: "ramesh@gmail.com" }
        ],
        nextId:5
    },
    reducers:{
        addConsumer: (state,action:PayloadAction<Consumer>) => {
            let consumer=action.payload;
            consumer.cid=state.nextId;
            state.consumers.push(consumer);
            state.nextId=state.nextId+1;
        },
        updateConsumer: (state,action:PayloadAction<Consumer>) => {
            let consumer=action.payload;
            let index = state.consumers.findIndex(cx => cx.cid===consumer.cid);
            if(index>-1){
                state.consumers[index]=consumer;
            }else{
                throw new Error("No such record found");
            }            
        },
        deleteConsumer: (state,action:PayloadAction<number>) => {
            let consumerId=action.payload;
            let index = state.consumers.findIndex(cx => cx.cid===consumerId);
            if(index>-1){
                state.consumers.splice(index,1);
            }else{
                throw new Error("No such record found");
            }
        },
    }
});

//Slice Reducer
export const consumersReducer = consumersSlice.reducer;

//Actions related to thsi Slice
export const {addConsumer,deleteConsumer,updateConsumer} = consumersSlice.actions; 

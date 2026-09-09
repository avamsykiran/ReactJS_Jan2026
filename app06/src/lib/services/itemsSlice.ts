import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Item } from "../models/Item";

const itemsSlice = createSlice({
    name: "itemsSlice",
    initialState: {
        items: [
            { itemCode: 101, itemName: "apple", rate: 150, units: "kg", stock: 188 },
            { itemCode: 102, itemName: "Oil", rate: 366, units: "litre", stock: 28 },
            { itemCode: 103, itemName: "Biscuit", rate: 15, units: "pack", stock: 4 },
        ],
        nextCode: 104
    },
    reducers: {
        addItem: (state, action: PayloadAction<Item>) => {
            let item = action.payload;
            item.itemCode = state.nextCode;
            state.items.push(item);
            state.nextCode = state.nextCode + 1;
        },
        updateItem: (state, action: PayloadAction<Item>) => {
            let item = action.payload;
            let index = state.items.findIndex(ix => ix.itemCode === item.itemCode);
            if (index > -1) {
                state.items[index] = item;
            } else {
                throw new Error("No such record found");
            }
        },
        deleteItem: (state, action: PayloadAction<number>) => {
            let itemCode = action.payload;
            let index = state.items.findIndex(ix => ix.itemCode === itemCode);
            if (index > -1) {
                state.items.splice(index, 1);
            } else {
                throw new Error("No such record found");
            }
        },
        incStock: (state, action: PayloadAction<number>) => {
            let itemCode = action.payload;
            let index = state.items.findIndex(ix => ix.itemCode === itemCode);
            if (index > -1) {
                state.items[index].stock++;
            } else {
                throw new Error("No such record found");
            }
        },
        decStock: (state, action: PayloadAction<number>) => {
            let itemCode = action.payload;
            let index = state.items.findIndex(ix => ix.itemCode === itemCode);
            if (index > -1) {
                if(state.items[index].stock>0){
                    state.items[index].stock--;
                }                
            } else {
                throw new Error("No such record found");
            }
        }
    }
});

//Slice Reducer
export const itemsReducer = itemsSlice.reducer;

//Actions related to this Slice
export const { addItem, updateItem, deleteItem,incStock,decStock } = itemsSlice.actions; 

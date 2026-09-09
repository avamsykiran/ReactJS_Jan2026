import { createEntityAdapter, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Item } from "../models/Item";

export const itemsEntityAdapter = createEntityAdapter<Item>({
    selectId: item => item.itemCode
})

const itemsSlice = createSlice({
    name: "itemsSlice",
    initialState: itemsEntityAdapter.getInitialState(
        {
            nextCode: 104
        },
        [
            { itemCode: 101, itemName: "apple", rate: 150, units: "kg", stock: 188 },
            { itemCode: 102, itemName: "Oil", rate: 366, units: "litre", stock: 28 },
            { itemCode: 103, itemName: "Biscuit", rate: 15, units: "pack", stock: 4 },
        ]
    ),
    reducers: {
        addItem: (state, action: PayloadAction<Item>) => {
            let item = action.payload;
            item.itemCode = state.nextCode;
            itemsEntityAdapter.addOne(state,item);
            state.nextCode = state.nextCode + 1;
        },
        updateItem: itemsEntityAdapter.setOne,
        deleteItem: itemsEntityAdapter.removeOne,
        incStock: (state, action: PayloadAction<number>) => {
            let itemCode = action.payload;
            let item = state.entities[itemCode];
            itemsEntityAdapter.updateOne(state,{
                id:itemCode,
                changes: {
                    stock: item.stock+1
                }
            })
        },
        decStock: (state, action: PayloadAction<number>) => {
            let itemCode = action.payload;
            let item = state.entities[itemCode];
            itemsEntityAdapter.updateOne(state,{
                id:itemCode,
                changes: {
                    stock: item.stock-1
                }
            })
        }
    }
});

//Slice Reducer
export const itemsReducer = itemsSlice.reducer;

//Actions related to this Slice
export const { addItem, updateItem, deleteItem, incStock, decStock } = itemsSlice.actions; 

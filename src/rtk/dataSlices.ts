import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DataState, DeletePayload, EditPayload, Item } from "../types/types";

const initialState: DataState = {
    items: []
};

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        addData: (state, action: PayloadAction<Item>) => {
            state.items.push(action.payload);
        },

        deleteData: (state, action: PayloadAction<DeletePayload>) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },

        editData: (state, action: PayloadAction<EditPayload>) => {
            const { id, name, email, phone } = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem) {
                existingItem.name = name;
                existingItem.email = email;
                existingItem.phone = phone;
            }
        }
    }
});

export const { addData, deleteData, editData } = dataSlice.actions;
export default dataSlice.reducer;

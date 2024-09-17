import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlices";

export const store = configureStore({
    reducer: {
        crud: dataSlice
    }
});

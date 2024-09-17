import { store } from "../rtk/store";

export interface Item {
    id: number;
    name: string;
    email: string;
    phone: string;
}

export interface DataState {
    items: Item[];
}

export interface DeletePayload {
    id: number;
}

export interface EditPayload {
    id: number;
    name: string;
    email: string;
    phone: string;
}

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Todo } from "./todosSlice";

export type Filter = null | Todo["state"];

const filterSlice = createSlice({
    name: "filter",
    initialState: null as Filter,
    reducers: {
        changeFilter: {
            reducer(_, action: PayloadAction<Filter>) {
                return action.payload;
            },
            prepare(filter: Filter) {
                return { payload: filter };
            }
        }
    }
});

export const { changeFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Filters = "ALL" | "COMPLETE" | "TODO";

const initialState: Filters = "ALL";
const FILTER = "todo-filter";

const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        // @ts-ignore
        setVisability: (_, { payload }: PayloadAction<Filters>): Filters  => {
            window.localStorage.setItem(FILTER, payload);
            return payload;
        }
    }
});

export const { setVisability } = filterSlice.actions;
export default filterSlice.reducer;

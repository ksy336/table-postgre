import {createSlice} from "@reduxjs/toolkit";
import {SelectedState} from "../types/types";

const initialState: SelectedState = {
    inputValue: "",
    sortData: {},
    paginatedItems: [],
}
const itemsSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        setInputValue(state, action) {
            state.inputValue = action.payload;
        },
        getDataForSorting(state, action) {
            state.sortData = action.payload;
        },
        getNewFilteredData(state, action) {
            state.paginatedItems = action.payload;
        }
    }
});

export const {setInputValue, getDataForSorting, getNewFilteredData} = itemsSlice.actions;
export default itemsSlice.reducer;
import {createSlice} from "@reduxjs/toolkit";
import {SelectedState} from "../types/types";

const initialState: SelectedState = {
    inputValue: "",
    sortData: {
        filterByColumn: "",
        filterByCondition: "",
        enteredValueForSorting: "",

    },
    paginatedItems: [],
    isSorted: false,
    filterByColumn: "",
    filterByCondition: "",
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
        },
        filterByAmount(state, action) {
            const amount = action.payload;
            state.paginatedItems.filter((item: any) => item.amount === amount)
        },
        changeSortedStatus(state, action) {
            state.isSorted = action.payload;
        },
        filteredByColumn(state, action) {
            state.filterByColumn = action.payload;
        },
        filteredByCondition(state, action) {
            state.filterByCondition = action.payload;
        }
    }
});

export const {setInputValue, getDataForSorting, getNewFilteredData, filterByAmount, changeSortedStatus, filteredByColumn, filteredByCondition} = itemsSlice.actions;
export default itemsSlice.reducer;
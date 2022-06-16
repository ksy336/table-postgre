import store from "../store";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// export const dispatchStore = store.dispatch;

export interface SelectedState {
    inputValue: string;
    sortData: {};
    paginatedItems: [];
}

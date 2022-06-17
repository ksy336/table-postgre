export interface ITable {
    timedate: string;
    title: string;
    amount: number;
    distance: number;
}

export interface ITableItems {
    tableItems: [];
    paginate: (page:number) => void;
    itemsPerPage: number;
    slicedItemsPerPage: Array<never>;
    sortedList: Array<never>;
    isSorted: boolean;
}
export interface IPaginate {
    tableItems: [];
    paginate: (page:number) => void;
    itemsPerPage: number;
}
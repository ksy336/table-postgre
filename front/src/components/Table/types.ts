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
}
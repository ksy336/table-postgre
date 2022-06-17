export interface IPagination {
    pageNumbers: number[];
    paginate: (page: number) => void;
}
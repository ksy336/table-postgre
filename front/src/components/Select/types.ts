import {ChangeEvent} from "react";

export interface ISelect {
    handleSubmitForSort: (event: ChangeEvent<HTMLFormElement>) => void;
    filterByColumn: string;
    selectHandler: (e: ChangeEvent<HTMLSelectElement>) => void;
    filterByCondition: string;
    selectConditionHandler: (e: ChangeEvent<HTMLSelectElement>) => void;
}
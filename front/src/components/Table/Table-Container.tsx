import React, { useEffect, useState } from 'react';
import tableService from '../../api/table/table-service';
import TableView from './Table-View';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../types/types';
import { getNewFilteredData, setTableItems } from '../../store/items-slice';
let filteredItems: never[];
import './Table.scss';

const TableContainer = () => {
  const [page, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(10);
  const dispatch = useDispatch<AppDispatch>();
  const {
    enteredValueForSorting: enteredValue,
    filterByColumn,
    filterByCondition,
  } = useSelector((state: RootState) => state.items.sortData);
  const isSorted = useSelector((state: RootState) => state.items.isSorted);
  const tableItems = useSelector((state: RootState) => state.items.tableItems);

  useEffect(() => {
    getItemsFromTable();

    return () => {
      dispatch(setTableItems([]));
    };
  }, [dispatch]);

  const getItemsFromTable = async () => {
    try {
      const items = await tableService.getAllDataTable();
      dispatch(setTableItems(items));
    } catch (e) {
      throw new Error('Fetching table data failed!');
    }
  };

  let isTitle = false;
  let isAmount = false;
  let isDistance = false;
  const lastItemIndex = page * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const slicedItemsPerPage: Array<never> = tableItems.slice(firstItemIndex, lastItemIndex);

  const getFilterEqual = () => {
    isTitle &&
      (filteredItems = slicedItemsPerPage.filter(
        (item: any) => item.title.toLowerCase() === enteredValue.toLowerCase()
      ));
    isAmount &&
      (filteredItems = slicedItemsPerPage.filter(
        (item: any) => item.amount === Number(enteredValue)
      ));
    isDistance &&
      (filteredItems = slicedItemsPerPage.filter(
        (item: any) => item.distance === Number(enteredValue)
      ));
  };
  const getFilterMoreCondition = () => {
    isTitle &&
      (filteredItems = slicedItemsPerPage.filter(
        (item: any) => item.title.length > enteredValue.length
      ));
    isAmount &&
      (filteredItems = slicedItemsPerPage.filter(
        (item: any) => item.amount > Number(enteredValue)
      ));
    isDistance &&
      (filteredItems = slicedItemsPerPage.filter(
        (item: any) => item.distance > Number(enteredValue)
      ));
  };
  const getFilterLessCondition = () => {
    isTitle &&
      (filteredItems = slicedItemsPerPage.filter(
        (item: any) => item.title.length < enteredValue.length
      ));
    isAmount &&
      (filteredItems = slicedItemsPerPage.filter(
        (item: any) => item.amount < Number(enteredValue)
      ));
    isDistance &&
      (filteredItems = slicedItemsPerPage.filter(
        (item: any) => item.distance < Number(enteredValue)
      ));
  };
  const getFilterByContainCondition = () => {
    isTitle &&
      (filteredItems = slicedItemsPerPage.filter((item: any) =>
        item.title.toLowerCase().includes(enteredValue.toLowerCase())
      ));
    isAmount &&
      (filteredItems = slicedItemsPerPage.filter((item: any) =>
        item.amount.toString().includes(enteredValue)
      ));
    isDistance &&
      (filteredItems = slicedItemsPerPage.filter((item: any) =>
        item.distance.toString().includes(enteredValue)
      ));
  };

  if (filterByColumn === 'title') {
    isTitle = true;
  } else if (filterByColumn === 'amount') {
    isAmount = true;
  } else if (filterByColumn === 'distance') {
    isDistance = true;
  }

  if (filterByCondition === 'equal') {
    getFilterEqual();
  } else if (filterByCondition === 'more') {
    getFilterMoreCondition();
  } else if (filterByCondition === 'less') {
    getFilterLessCondition();
  } else if (filterByCondition === 'contains') {
    getFilterByContainCondition();
  }

  dispatch(getNewFilteredData(slicedItemsPerPage));

  const paginate = (page: number) => {
    return setCurrentPage(page);
  };

  return (
    <TableView
      tableItems={tableItems}
      slicedItemsPerPage={slicedItemsPerPage}
      paginate={paginate}
      itemsPerPage={slicedItemsPerPage.length}
      sortedList={filteredItems}
      isSorted={isSorted}
    />
  );
};

export default TableContainer;

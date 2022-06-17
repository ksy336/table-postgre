import React, { useEffect, useState } from 'react';
import tableService from '../../api/table/table-service';
import TableView from './Table-View';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../types/types';
import { getNewFilteredData } from '../../store/items-slice';
import './Table.scss';
let filteredItems: never[];

const TableContainer = () => {
  let isTitle = false;
  let isAmount = false;
  let isDistance = false;
  const dispatch = useDispatch<AppDispatch>();
  const {
    enteredValueForSorting: enteredValue,
    filterByColumn,
    filterByCondition,
  } = useSelector((state: RootState) => state.items.sortData);
  const isSorted = useSelector((state: RootState) => state.items.isSorted);
  const [tableItems, setTableItems] = useState<[]>([]);
  const [page, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(10);

  useEffect(() => {
    getItemsFromTable();

    return () => {
      setTableItems([]);
    };
  }, []);

  const lastItemIndex = page * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const slicedItemsPerPage: Array<never> = tableItems.slice(firstItemIndex, lastItemIndex);

  if (filterByColumn === 'title') {
    isTitle = true;
  } else if (filterByColumn === 'amount') {
    isAmount = true;
  } else if (filterByColumn === 'distance') {
    isDistance = true;
  }

  if (filterByCondition === 'equal') {
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
  } else if (filterByCondition === 'more') {
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
  } else if (filterByCondition === 'less') {
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
  } else if (filterByCondition === 'contains') {
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
  }
  console.log(filteredItems, lastItemIndex, firstItemIndex, slicedItemsPerPage, page);
  dispatch(getNewFilteredData(slicedItemsPerPage));
  const paginate = (page: number) => {
    return setCurrentPage(page);
  };

  const getItemsFromTable = async () => {
    try {
      const items = await tableService.getAllDataTable();
      setTableItems(items);
      console.log(items);
    } catch (e) {
      throw new Error('Fetching table data failed!');
    }
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

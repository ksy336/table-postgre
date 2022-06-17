import React, { useEffect, useState } from 'react';
import tableService from '../../api/table/table-service';
import TableView from './Table-View';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../types/types';
import { getNewFilteredData } from '../../store/items-slice';
import './Table.scss';

const TableContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { enteredValueForSorting: enteredValue } = useSelector(
    (state: RootState) => state.items.sortData
  );
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

  const lastItemIndex = page * itemsPerPage; // 9, 18
  const firstItemIndex = lastItemIndex - itemsPerPage; // 0, 9
  const slicedItemsPerPage: Array<never> = tableItems.slice(firstItemIndex, lastItemIndex); // 0-8, 9-17, 18-26, 27-36, 37-45
  const filteredItems = slicedItemsPerPage.filter(
    (item: any) => item.title.toLowerCase() === enteredValue.toLowerCase()
  );
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

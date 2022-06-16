import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoFound from '../src/components/NoFound/index';
import TableContainer from './components/Table/Table-Container';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TableContainer />} />
          <Route path="*" element={<NoFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

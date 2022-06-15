import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoFound from '../src/components/NoFound/index';
import Table from './components/Table/Table';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="*" element={<NoFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

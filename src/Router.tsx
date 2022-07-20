import React from 'react';
import { Route, Routes } from 'react-router-dom';

const Router = (): JSX.Element => (
  <Routes>
    <Route path="/" element={<h1>Home</h1>} />
  </Routes>
);

export default Router;

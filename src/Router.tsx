import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Account from './pages/Account';
import Create from './pages/Account/Create';
import Login from './pages/Account/Login';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Product from './pages/Product';
import Products from './pages/Products';
import User from './pages/User';
import Edit from './pages/User/Edit';
import ProductsSold from './pages/User/ProductsSold';
import Purchases from './pages/User/Purchases';
import Sales from './pages/User/Sales';

const Router = (): JSX.Element => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
    <Route path="/product/:slug" element={<Product />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/user" element={<User />}>
      <Route path="products-sold" element={<ProductsSold />} />
      <Route path="purchases" element={<Purchases />} />
      <Route path="sales" element={<Sales />} />
      <Route path="edit-user" element={<Edit />} />
    </Route>
    <Route path="/account" element={<Account />}>
      <Route path="create" element={<Create />} />
      <Route path="login" element={<Login />} />
    </Route>
  </Routes>
);

export default Router;

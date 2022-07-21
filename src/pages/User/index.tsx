import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderUser from './HeaderUser';

const User = (): JSX.Element => (
  <main>
    <HeaderUser />
    <Outlet />
  </main>
);

export default User;

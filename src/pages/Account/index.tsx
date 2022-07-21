import React from 'react';
import { Outlet } from 'react-router-dom';

const Account = (): JSX.Element => (
  <main>
    <Outlet />
  </main>
);

export default Account;

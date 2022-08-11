import React from 'react';
import { Outlet } from 'react-router-dom';

const Account = (): JSX.Element => (
  <main className="paddingDistanceHeader">
    <Outlet />
  </main>
);

export default Account;

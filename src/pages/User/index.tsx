import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import useControlRedux from '../../hooks/useControlRedux';
import HeaderUser from './HeaderUser';

const User = (): JSX.Element => {
  const navigate = useNavigate();

  // Conjunto referente ao redux.
  const { useAppSelector } = useControlRedux();
  const stateUser = useAppSelector((state) => state.user);

  // Verifica se o usuário esta logado.
  React.useEffect(() => {
    if (stateUser.data.information === null) {
      navigate('/account/login');
    }
  }, [navigate, stateUser.data.information]);
  return (
    <main>
      <HeaderUser />
      <Outlet />
    </main>
  );
};

export default User;

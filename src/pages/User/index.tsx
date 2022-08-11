import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useControlRedux from '../../hooks/useControlRedux';
import HeaderUser from './HeaderUser';

const SectionPatternUser = styled.section`
  padding: 1.875rem 0;
  background-color: ${(props) => props.theme.colors.primary};

  position: relative;
`;

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
    <main className="paddingDistanceHeader">
      <HeaderUser />
      <SectionPatternUser>
        <Outlet />
      </SectionPatternUser>
    </main>
  );
};

export default User;
